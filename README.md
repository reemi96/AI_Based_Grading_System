# AI-Based Grading System

A grading system that sends student solutions to an AI model running on Google Colab. Instructors can review the suggested grade and save their final decision.

## Requirements

- Python
- Node.js and npm
- Google Colab

## How to Run

How to Run

1. Open Smart_Grading_Assistant_Deployment.ipynb in Google Colab.
2. Configure the NGROK_TOKEN in Colab Secrets (first run only).
3. Run all cells and keep the Colab runtime active.
4. Run start_project.bat.
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Select the subject.
2. Upload the rubric file.
3. Upload the student solution.
4. Run the grading.
5. Review or modify the suggested grade.
6. Save the final decision.

Saved results are stored in `backend/grading_records.xlsx`.
