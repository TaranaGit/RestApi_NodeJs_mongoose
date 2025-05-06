# 🏋️ Exercise Tracker – Full Stack Web Application

This is a **full-stack web application** built using **React.js** for the frontend, **Node.js** with **Express.js** for the backend, and **MongoDB** with **Mongoose** for the database. The app allows users to track their exercise routines through a seamless interface, performing full **CRUD (Create, Read, Update, Delete)** operations.

The frontend and backend run concurrently, allowing real-time interactions with stored exercise data.

---

## 🚀 Features

- ✅ **Create** new exercise entries with title, load (kg), and reps
- 🔄 **Read** all exercises from the MongoDB database
- ✏️ **Update** exercise records
- ❌ **Delete** exercises no longer needed
- 📦 Data is persisted using MongoDB via a robust RESTful API
- 🧾 Form-based UI for adding and editing workouts
- 🔧 Backend and frontend operate concurrently for a smooth experience

---

## 🛠️ Technologies Used

### 🔹 Frontend

- **React.js** – For building interactive UI components
- **CSS** – For custom styling and responsive layout
- **Axios / Fetch API** – For making HTTP requests to the backend

### 🔹 Backend

- **Node.js** – JavaScript runtime for backend logic
- **Express.js** – Lightweight web framework for building APIs
- **CORS & Middleware** – For cross-origin requests and JSON parsing

### 🔹 Database

- **MongoDB** – NoSQL document-oriented database
- **Mongoose** – Object Data Modeling (ODM) library for MongoDB and Node.js

---


## 📁 Endpoints Overview

| Method | Endpoint                 | Description                            |
|--------|--------------------------|----------------------------------------|
| POST   | `/api/exercises`         | Add a new exercise entry               |
| GET    | `/api/exercises`         | Fetch all exercise entries             |
| GET    | `/api/exercises/:id`     | Fetch a specific exercise by ID        |
| PATCH  | `/api/exercises/:id`     | Update an exercise (partial/full)      |
| DELETE | `/api/exercises/:id`     | Delete an exercise by ID               |

---

## 🛠 Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- npm
- MongoDB (local or Atlas)

---

### 🔧 Running Locally

```bash
# Clone the repository
git clone git@github.com:TaranaGit/RestApi_NodeJs_mongoose.git
cd RestApi_NodeJs_mongoose

## Backend Setup
cd backend
npm install
npm run dev

## Frontend Setup
cd frontend
npm install
npm start
```

-- Frontend will run at http://localhost:3000 and the backend API will be available at http://localhost:4000.
