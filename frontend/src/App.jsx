import React, { useMemo, useRef, useState } from "react";
import { Brain, CheckCircle, FileText, Send, UploadCloud } from "lucide-react";

const API_URL = "http://127.0.0.1:8000/grade-assignment";
const SAVE_DECISION_URL = "http://127.0.0.1:8000/save-decision";
const COLAB_OFFLINE_MESSAGE = "Could not connect to Colab API. Make sure Colab and Cloudflare tunnel are running.";
const SAVE_DECISION_ERROR_MESSAGE = "Could not save final decision. Make sure the local Excel-saving API is running.";
const SUBJECT_REQUIRED_MESSAGE = "Please select a subject before saving.";
const subjectOptions = ["Programming Languages", "Programming 1", "Web Programming"];

const navItems = [
  {
    title: "New Assessment",
    description: "Upload rubric and answer",
    icon: FileText,
  },
];

function DocumentCheckIcon({ className = "" }) {
  return (
    <div className={`document-check ${className}`} aria-hidden="true">
      <FileText className="document-icon" strokeWidth={1.6} />
      <CheckCircle className="document-badge" strokeWidth={2.4} />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <DocumentCheckIcon className="sidebar-logo" />
        <div>
          <strong>AI Grading</strong>
          <span>Assistant</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navItems.map(({ title, description, icon: Icon }) => (
          <button
            className={`nav-item ${title === "New Assessment" ? "active" : ""}`}
            key={title}
            type="button"
          >
            <Icon className="nav-icon" strokeWidth={2.1} />
            <span>
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function HeaderIllustration() {
  return (
    <div className="header-illustration">
      <DocumentCheckIcon className="hero-document" />
    </div>
  );
}

function FileUpload({ id, label, file, onFileChange }) {
  return (
    <section className="upload-panel">
      <div className="upload-icon-wrap" aria-hidden="true">
        <UploadCloud className="upload-icon" strokeWidth={2.1} />
      </div>
      <div className="upload-copy">
        <p className="section-label">{label}</p>
        <p className="file-name">{file ? file.name : "No file selected"}</p>
      </div>
      <label className="upload-button" htmlFor={id}>
        Choose File
      </label>
      <input
        id={id}
        type="file"
        accept=".txt,.pdf,.doc,.docx,.json,.jsonl,.py"
        onChange={(event) => onFileChange(event.target.files?.[0] || null)}
      />
    </section>
  );
}

function EmptyEvaluation() {
  return (
    <div className="evaluation-body empty-evaluation">
      <div className="empty-illustration" aria-hidden="true">
        <Brain className="brain-icon" strokeWidth={1.8} />
        <CheckCircle className="empty-check" strokeWidth={2.2} />
      </div>
      <h3>No evaluation yet</h3>
      <div className="pending-grade">
        <span>Predicted Grade</span>
        <strong>- /10</strong>
      </div>
    </div>
  );
}

function ErrorEvaluation({ message }) {
  return (
    <div className="evaluation-body error-evaluation">
      <div className="empty-illustration" aria-hidden="true">
        <Brain className="brain-icon" strokeWidth={1.8} />
      </div>
      <h3>Unable to grade</h3>
      <p className="error-text">{message}</p>
    </div>
  );
}

function formatGradeForDisplay(grade) {
  return grade;
}

function extractQuestionIdFromFileName(fileName) {
  return fileName.match(/Q\d+/i)?.[0]?.toUpperCase() || "";
}

function GradeCard({ result }) {
  return (
    <div className="evaluation-body result-evaluation">
      <p className="section-label">Predicted Grade</p>
      <strong>{formatGradeForDisplay(result.predictedGrade)}</strong>
      <div className="review-ready">
        <CheckCircle size={22} strokeWidth={2.4} />
        Ready for instructor review
      </div>
    </div>
  );
}

function ProfessorDecision({ result, rubricFileName, studentFileName, subject = "", questionId = "" }) {
  const [finalGrade, setFinalGrade] = useState(result?.predictedGrade || "");
  const [notes, setNotes] = useState("");
  const [saveStatus, setSaveStatus] = useState("idle");
  const [saveMessage, setSaveMessage] = useState("");
  const [saveError, setSaveError] = useState("");
  const latestDecision = useRef({ finalGrade: result?.predictedGrade || "", notes: "" });

  function resetSavedDecision() {
    if (saveStatus === "saved") {
      setSaveStatus("idle");
    }
    setSaveMessage("");
    setSaveError("");
  }

  function updateFinalGrade(value) {
    latestDecision.current = { ...latestDecision.current, finalGrade: value };
    setFinalGrade(value);
    resetSavedDecision();
  }

  function updateNotes(value) {
    latestDecision.current = { ...latestDecision.current, notes: value };
    setNotes(value);
    resetSavedDecision();
  }

  async function saveDecision() {
    const decisionToSave = { finalGrade, notes };

    if (!subject) {
      setSaveStatus("idle");
      setSaveMessage("");
      setSaveError(SUBJECT_REQUIRED_MESSAGE);
      return;
    }

    setSaveStatus("saving");
    setSaveMessage("");
    setSaveError("");

    try {
      const response = await fetch(SAVE_DECISION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          question_id: questionId,
          rubric_file_name: rubricFileName,
          student_file_name: studentFileName,
          ai_grade: result.predictedGrade,
          final_grade: decisionToSave.finalGrade,
          instructor_notes: decisionToSave.notes,
          saved_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        let errorDetail = SAVE_DECISION_ERROR_MESSAGE;

        try {
          const errorData = await response.json();
          if (typeof errorData.detail === "string") {
            errorDetail = errorData.detail;
          } else if (Array.isArray(errorData.detail) && errorData.detail[0]?.msg) {
            errorDetail = errorData.detail[0].msg;
          }
        } catch (error) {
          errorDetail = SAVE_DECISION_ERROR_MESSAGE;
        }

        throw new Error(errorDetail);
      }

      const data = await response.json();

      if (
        latestDecision.current.finalGrade === decisionToSave.finalGrade &&
        latestDecision.current.notes === decisionToSave.notes
      ) {
        setSaveStatus("saved");
        setSaveMessage(data.message || "Final decision saved successfully.");
      } else {
        setSaveStatus("idle");
      }
    } catch (error) {
      setSaveStatus("idle");
      setSaveError(error.message || SAVE_DECISION_ERROR_MESSAGE);
    }
  }

  return (
    <section className="decision-panel">
      <div className="panel-header">
        <div>
          <h2>Instructor Review</h2>
        </div>
      </div>

      <div className="decision-grid">
        <div className="grade-summary">
          <span>AI Suggested Grade</span>
          <strong>{result.predictedGrade}</strong>
        </div>

        <label className="field-group" htmlFor="final-grade">
          <span>Final Instructor Grade</span>
          <input
            id="final-grade"
            className="grade-input"
            value={finalGrade}
            onChange={(event) => updateFinalGrade(event.target.value)}
            placeholder="Example: 8/10"
          />
        </label>
      </div>

      <label className="field-group notes-field" htmlFor="instructor-notes">
        <span>Instructor Notes</span>
        <textarea
          id="instructor-notes"
          value={notes}
          onChange={(event) => updateNotes(event.target.value)}
          placeholder="Add review notes for the final grading record..."
          rows="5"
        />
      </label>

      <div className="decision-actions">
        <button
          className="secondary-button save-decision-button"
          type="button"
          onClick={saveDecision}
          disabled={saveStatus === "saving"}
        >
          {saveStatus === "saving" && "Saving..."}
          {saveStatus === "saved" && "\u2713 Decision Saved"}
          {saveStatus === "idle" && (
            <>
              <Send size={20} strokeWidth={2.4} />
              Save Final Decision
            </>
          )}
        </button>
        {saveStatus === "saved" && saveMessage && <p className="save-confirmation">{saveMessage}</p>}
        {saveError && <p className="error-text save-error">{saveError}</p>}
      </div>
    </section>
  );
}

export default function App() {
  const [subject, setSubject] = useState("");
  const [rubricFile, setRubricFile] = useState(null);
  const [studentFile, setStudentFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const questionId = extractQuestionIdFromFileName(rubricFile?.name || "");

  const canGrade = useMemo(
    () => rubricFile && studentFile && !isLoading,
    [rubricFile, studentFile, isLoading],
  );

  async function readUploadedFile(file) {
    return file.text();
  }

  async function runGradeAssignment() {
    if (!canGrade) return;

    setIsLoading(true);
    setResult(null);
    setErrorMessage("");

    try {
      const [rubricText, studentAnswerText] = await Promise.all([
        readUploadedFile(rubricFile),
        readUploadedFile(studentFile),
      ]);

      console.log("Rubric text length:", rubricText.length);
      console.log("Student answer text length:", studentAnswerText.length);
      console.log("Rubric preview:", rubricText.slice(0, 200));
      console.log("Student preview:", studentAnswerText.slice(0, 200));

      if (!rubricText.trim() || !studentAnswerText.trim()) {
        setErrorMessage("Uploaded files must contain text before grading.");
        setIsLoading(false);
        return;
      }

      console.log("Calling local grading API:", API_URL);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          question_id: questionId,
          student_answer: studentAnswerText,
          rubric_text: rubricText,
          rubric_file_name: rubricFile.name,
          student_file_name: studentFile.name,
        }),
      });

      if (!response.ok) {
        let errorDetail = COLAB_OFFLINE_MESSAGE;

        try {
          const errorData = await response.json();
          if (typeof errorData.detail === "string") {
            errorDetail = errorData.detail;
          } else if (Array.isArray(errorData.detail) && errorData.detail[0]?.msg) {
            errorDetail = errorData.detail[0].msg;
          }
        } catch (error) {
          errorDetail = COLAB_OFFLINE_MESSAGE;
        }

        throw new Error(errorDetail);
      }

      const data = await response.json();
      console.log("Grading response:", data);

      setResult({
        predictedGrade: data.predictedGrade || data.predicted_grade,
        rawResponse: data.rawResponse || data.raw_response || "",
      });
    } catch (error) {
      setErrorMessage(error.message || COLAB_OFFLINE_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app-frame">
      <Sidebar />

      <main className="app-shell">
        <header className="topbar">
          <div className="header-copy">
            <h1>AI-Based Assistant System for Grading Assignments</h1>
            <p>
              Upload the grading rubric and student's solution to receive an AI-predicted grade.
              The instructor can review, modify, and approve the final grade.
            </p>
          </div>
          <HeaderIllustration />
        </header>

        <section className="workspace">
          <section className="section-card">
            <div className="section-heading card-title">
              <FileText className="card-title-icon" strokeWidth={2.2} />
              <div>
                <p className="section-label">New Assessment</p>
                <h2>Assignment Inputs</h2>
              </div>
            </div>

            <label className="field-group" htmlFor="subject-select">
              <span>Subject</span>
              <select
                id="subject-select"
                className="grade-input"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              >
                <option value="" disabled>
                  Select Subject
                </option>
                {subjectOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <FileUpload
              id="rubric-file"
              label="Upload Rubric File"
              file={rubricFile}
              onFileChange={setRubricFile}
            />
            <FileUpload
              id="student-answer-file"
              label="Upload Student Answer File"
              file={studentFile}
              onFileChange={setStudentFile}
            />

            <button className="grade-button" type="button" disabled={!canGrade} onClick={runGradeAssignment}>
              {isLoading ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Grading
                </>
              ) : (
                <>
                  <Send size={20} strokeWidth={2.4} />
                  Grade Assignment
                </>
              )}
            </button>
            {!canGrade && !isLoading && <p className="button-helper">Select Both Files First</p>}
          </section>

          <div className="right-column">
            <section className="evaluation-card">
              <div className="section-heading card-title">
                <Brain className="card-title-icon" strokeWidth={2.2} />
                <div>
                  <p className="section-label">AI Assisted Review</p>
                  <h2>Assessment Result</h2>
                </div>
              </div>

              {isLoading && (
                <div className="loading-panel">
                  <span className="large-spinner" aria-hidden="true" />
                  <div>
                    <p className="section-label">Processing</p>
                    <h2>Preparing evaluation</h2>
                  </div>
                </div>
              )}

              {!isLoading && errorMessage && <ErrorEvaluation message={errorMessage} />}
              {!isLoading && !errorMessage && result && <GradeCard result={result} />}
              {!isLoading && !errorMessage && !result && <EmptyEvaluation />}
            </section>

            {!errorMessage && result && (
              <ProfessorDecision
                result={result}
                rubricFileName={rubricFile?.name || ""}
                studentFileName={studentFile?.name || ""}
                subject={subject}
                questionId={questionId}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
