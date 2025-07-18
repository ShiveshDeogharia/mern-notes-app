# 📝 MERN Notes App

A full-stack Notes app built with the **MERN stack** — MongoDB, Express, React, and Node.js — featuring full CRUD functionality, clean UI, and polished user experience.

![screenshot](https://via.placeholder.com/800x400?text=MERN+Notes+App+Demo)

## 🚀 Tech Stack

- **Frontend**: React, Axios, plain CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (local or Atlas)
- **Other Tools**: Git, GitHub

## ✅ Features

- 📝 Create, Read, Update, and Delete notes
- ✨ Clean and responsive UI
- ⚙️ RESTful API with Express + MongoDB
- ♻️ Reactive frontend using React state
- 🛠 Inline editing with Save/Cancel controls
- ⏱ Timestamped notes (`createdAt`, `updatedAt`)
- 🌐 Easy to deploy frontend and backend independently

## 📦 Folder Structure

```
mern-notes-app/
├── frontend/        # React frontend
│   └── src/
├── backend/         # Express backend with MongoDB
│   └── routes/
│   └── models/
├── .gitignore
├── README.md
├── LICENSE
```

## 💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mern-notes-app.git
cd mern-notes-app
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend` with the following:

```
MONGODB_URI=mongodb://localhost:27017/notesapp
```

Then run the backend server:

```bash
node server.js
```

### 3. Set Up the Frontend

```bash
cd ../frontend
npm install
npm start
```

Your app will run at: [http://localhost:3000](http://localhost:3000)

## 📸 Screenshots


## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙌 Author

Built with 💙 by [Shivesh Deogharia](https://github.com/ShiveshDeogharia)
