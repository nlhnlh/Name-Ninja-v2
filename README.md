# Name-Ninja-v2

## Structure

- `/frontend`: Static files (HTML, CSS, JS)
- `/backend`: Node.js Express server serving frontend and API endpoints

## How to Run Locally

1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start backend server:
   ```bash
   node app.js
   ```
3. Visit [http://localhost:3000](http://localhost:3000) to use the app.

## How Frontend and Backend Communicate

- Backend serves frontend static files.
- Frontend fetches data from backend API endpoints (example: `/api/hello`).