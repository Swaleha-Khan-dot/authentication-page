# 🔐 Authentication Page

This repository contains a **full-stack authentication service** with separate **frontend** and **backend** components. It provides a secure and reliable way for users to **sign up** and **log in**, ensuring data integrity and user privacy.

---

## ✨ Features
- 📝 **User Sign-Up**: Create a new user account with a unique username, email, and a secure password.  
- 🔑 **User Log-In**: Authenticate existing users using their email and password.  
- 🔒 **Secure Password Hashing**: User passwords are encrypted using **bcryptjs** before being stored in the database.  
- 🎫 **JSON Web Tokens (JWT)**: Secure session management with **jsonwebtoken** to handle user authentication after logging in.  
- 🌍 **CORS Protection**: Backend is configured with **cors** to allow requests only from trusted frontend origins.  
- 📱 **Responsive UI**: A modern and responsive user interface built with **React, shadcn/ui, and Tailwind CSS**.  
- ⚙️ **Centralized Configuration**: All sensitive information is managed with **dotenv** environment variables.  
- 🔄 **Axios Interceptors**: Handles secure requests and responses between frontend and backend.  

---

## 🛠️ Technology Stack

### **Backend**
- [Express.js](https://expressjs.com/) – Minimalist web framework for Node.js  
- [MongoDB Atlas](https://www.mongodb.com/atlas) – Cloud-based NoSQL database  
- [mongoose](https://mongoosejs.com/) – MongoDB object modeling tool  
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – For hashing passwords  
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) – JWT implementation  
- [cors](https://www.npmjs.com/package/cors) – Enable cross-origin resource sharing  
- [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable management  

### **Frontend**
- [React.js](https://react.dev/) – JavaScript library for building UIs  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- [shadcn/ui](https://ui.shadcn.com/) – Reusable UI components  
- [Framer Motion](https://www.framer.com/motion/) – Motion library for React  
- [Axios](https://axios-http.com/) – HTTP client for API requests  

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.  

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (v14.x or higher)  
- npm (or yarn)  
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account and cluster connection string

---

### 1️⃣ Backend Setup

```bash
# Navigate into the backend folder
cd backend

# Install dependencies
npm install
```
### Create a .env file in the backend directory and add the following:
```bash
MONGO_URI=<Your MongoDB Atlas Connection String>
JWT_SECRET=<A_Secret_Key_for_JWT>
```

### Start the backend server:
```bash
npm start
```

### ➡️ Server will run on: http://localhost:5000

---

### 2️⃣ Frontend Setup

```bash
# Navigate into the frontend folder
cd ../frontend

# Install dependencies
npm install
```

### Create a .env file in the frontend directory and add:
```bash
VITE_API_BASE_URL=http://localhost:5000
```

### Start the React development server:
```bash
npm run dev
```

### ➡️ Frontend will run on: http://localhost:5173 (or a similar port)

---

## 📷 Preview




