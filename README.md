# 🔐 Offline Role-Based Authentication System
### A Local Authentication Platform (SuperAdmin • Admin • User)

**Offline Auth System** is a lightweight, secure, and fully **offline-ready** role-based authentication system built with a **React.js frontend** and **Node.js + Express backend**, powered by a **local SQLite database** and **bcrypt password hashing**.  
No internet connection is required to run the application. 🚀

---

## ⭐ Key Highlights

### 🔐 Authentication & Authorization
- Secure login & registration  
- Password hashing using bcrypt  
- Role-based access (**user**, **admin**, **superadmin**)  
- Protected dashboards per role  
- Fully offline (no cloud / no external APIs)

---

## 👑 SuperAdmin
- Highest privileged role  
- **Automatically created on backend startup**  
- Credentials are loaded from `.env `  
- Cannot be registered from frontend UI  
## 👑 Default SuperAdmin Credentials

The SuperAdmin account is **automatically created** when the backend server starts.

**Default credentials:**

- **Email:** `superadmin@gmail.com`  
- **Password:** `superadmin123`

⚠️ These credentials are loaded from the `.env` file.

---
## 🏗️ Tech Stack

| Layer | Technology |
|------|------------|
| **Frontend / UI** | React.js + React Router |
| **Backend** | Node.js, Express.js |
| **Database** | SQLite (local file-based) |
| **Security** | bcrypt |
| **Architecture** | Simple modular structure |

---

## 🗄️ Database

| Item | Details |
|----|--------|
| **Database Type** | SQLite |
| **Storage** | Local file-based |
| **Internet Required** | ❌ No |
| **External Services** | ❌ None |
## 📦 Dependencies

### Backend
- **express** – Web framework for Node.js  
- **sqlite3** – Local SQLite database driver  
- **bcrypt** – Password hashing  
- **cors** – Cross-origin resource sharing  
- **dotenv** – Environment variable management  

### Frontend
- **react** – UI library  
- **react-router-dom** – Client-side routing  
- **axios** – HTTP requests  


### 👤 Users Table

| Field | Description |
|-----|-------------|
| `name` | User full name |
| `email` | Unique email address |
| `password` | Hashed password |
| `role` | user \| admin \| superadmin |

---

## 🔐 Security Notes
- Passwords are securely hashed using **bcrypt**
- No plaintext passwords are stored
- Database remains local to the system

---

## 🚀 Usage
- Start backend server
- Start frontend application
- Login or register users
- SuperAdmin is auto-created from `.env`

---

## ❤️ Built With Love
This project was built with care for **learning, experimentation, and offline-first systems**.  
Simple, secure, and easy to extend.

---

## 📄 License
This project is licensed for **educational and non-commercial use only**.  


---

## ✨ Author
Developed by **Ms.Shruti P.S.**
