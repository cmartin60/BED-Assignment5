# ** Backend Development API - Assignment 5**

A secure, well-documented backend API built with **Node.js, Express, TypeScript, and Firebase Firestore**. This project follows best practices for **validation, error handling, and authentication**.

---

## **Features**

 - RESTful API with **CRUD operations** for Employees and Branches  
 - **Firebase Authentication** for secure access  
 - **Firestore Integration** for persistent storage  
 - **Joi Validation** for request data  
 - **Swagger API Documentation** for public access  
 - **Jest Tests** for validation, services, and controllers  
 - **CI/CD** via GitHub Actions  

---

## **📦 Installation**

1. **Clone the repository**  
   ```
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**  
   ```
   npm install
   ```

3. **Start the server**  
   ```
    npm start
   ```
   The API will be available at:  
   **http://localhost:3000**

---

## **Environment Variables**

Create a `.env` file in the root directory with the following variables:


```
NODE_ENV =development
port = 3000
FIREBASE_PROJECT_ID = path/to/firebase-adminsdk.json
FIREBASE_PRIVATE_KEY = PRIVATE
FIREBASE_CLIENT_EMAIL = PRIVATE
SWAGGER_SERVER_URL = http://localhost:3000/api/v1
```

Ensure your **Firebase Admin SDK JSON file** is not committed to Git.

---

## **API Documentation**

The full API documentation is available via **GitHub Pages**:
**[Public API Docs](https://cmartin60.github.io/BED-Assignment5/)**  

Alternatively, you can access the **local documentation** at:  
*run the server locally
**http://localhost:5000/api-docs**

---

## **Running Tests**

To run the tests:
npm test


---


