@echo off
if /I "%~1"=="frontend" goto frontend

start "Backend" /D "%~dp0backend" cmd /k "python -m uvicorn main:app --reload"
start "Frontend" cmd /k call "%~f0" frontend
exit /b

:frontend
cd /d "%~dp0frontend"

if exist "node_modules\" (
    npm run dev
) else (
    npm install
    if errorlevel 1 (
        echo.
        echo ERROR: npm install failed. Review the errors above and try again.
        goto :eof
    )
    npm run dev
)
