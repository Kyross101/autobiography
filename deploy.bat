@echo off
echo ============================================
echo   Autobiography - Git Deploy Script
echo ============================================
echo.

:: Check if git is installed
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed or not in PATH.
    pause
    exit /b 1
)

:: Prompt for commit message
set /p COMMIT_MSG="Enter commit message (or press Enter for default): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update autobiography site

echo.
echo [1/4] Staging all changes...
git add .
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] git add failed.
    pause
    exit /b 1
)

echo [2/4] Committing with message: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Nothing new to commit, or commit failed.
)

echo [3/4] Pushing to remote (origin main)...
git push origin main
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Push to 'main' failed. Trying 'master'...
    git push origin master
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Push failed. Check your remote and branch name.
        pause
        exit /b 1
    )
)

echo [4/4] Done!
echo.
echo ============================================
echo   Successfully deployed to GitHub!
echo ============================================
echo.
pause
