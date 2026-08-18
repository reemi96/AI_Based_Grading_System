# AI-Based Grading System

A grading system that sends student solutions to an AI model running on Google Colab. Instructors can review the suggested grade and save their final decision.

## Requirements

- Python
- Node.js and npm
- Google Colab

## How to Run

1. Download or clone this GitHub repository to your computer.
2. Open Smart_Grading_Assistant_Deployment.ipynb in Google Colab.
3. Run all cells and keep the Colab runtime active.
4. After the cells finish running, copy the generated Cloudflare Public URL ending with 
'trycloudflare.com'.
5. Open 'backend/main.py' and replace the value of 'COLAB_GRADE_URL' with the new Cloudflare URL followed by '/grade'.
6. Save 'backend/main.py'.
7. Run 'start_project.bat'.
6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Select the subject.
2. Upload the rubric file.
3. Upload the student solution.
4. Run the grading.
5. Review or modify the suggested grade.
6. Save the final decision.

Saved results are stored in `backend/grading_records.xlsx`.
