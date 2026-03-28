# 🚀 Simple REST API (Node.js + Express)

A beginner-friendly REST API built using **Node.js** and **Express.js** that performs basic **CRUD operations** (Create, Read, Update, Delete) on user data.

---

## 📌 What is this project?

This project demonstrates how a backend server works:

* Handles HTTP requests (GET, POST, PUT, DELETE)
* Manages user data
* Sends JSON responses

It is a **foundation project** for learning backend development.

---

## ⚙️ Tech Stack

* Node.js
* Express.js

---

## 📂 Project Structure

```
project-folder/
│
├── api.js          # Main server file
├── package.json    # Project metadata
├── .gitignore      # Files to ignore in Git
└── README.md       # Project documentation
```

---

## 🔥 Features

* ✅ Get all users
* ✅ Get user by ID
* ✅ Create new user
* ✅ Update existing user
* ✅ Delete user

---

## 📡 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /users     | Get all users   |
| GET    | /users/:id | Get user by ID  |
| POST   | /users     | Create new user |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Delete user     |

---

## 🧪 How to Run the Project

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/simple-rest-api.git
```

### 2. Navigate into the folder

```
cd simple-rest-api
```

### 3. Install dependencies

```
npm install
```

### 4. Start the server

```
node api.js
```

👉 Server will run at:

```
http://localhost:3000
```

---

## 🧪 How to Test API

You can use:

* Postman (recommended)
* Browser (for GET requests)
* curl (terminal)

### Example: Create User

POST `/users`

```
{
  "name": "Rohit",
  "age": 21
}
```

---

## ⚠️ Important Notes

* Data is stored in memory (array), so it will reset when the server restarts
* This is a beginner-level project (no database yet)

---

## 🚀 Future Improvements

* 🔹 Add MongoDB (Database)
* 🔹 Add Authentication (JWT)
* 🔹 Add Validation
* 🔹 Use MVC architecture
* 🔹 Deploy the API

---

## 🧠 What You Will Learn

* How REST APIs work
* Express routing
* Request & Response handling
* CRUD operations

---

## 👨‍💻 Author

Rohit Singh

---

## ⭐ If you found this helpful

Give this repo a ⭐ on GitHub and share it!

---
