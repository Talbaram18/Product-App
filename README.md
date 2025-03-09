📌 README.md
md
Copy
Edit
# 🛍️ Product Management App

A **React-based product management app** that allows users to **view, add, edit, delete, search, sort, and paginate** a list of products. All changes are **automatically saved** in local storage.

## 🚀 Features

✔ View a list of available products  
✔ Add a new product with validation  
✔ Edit and update product details  
✔ Delete a product  
✔ Search products by name or description  
✔ Sort products by name or creation date  
✔ Pagination (5 products per page)  
✔ Data persists using **Local Storage**  

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Talbaram18/Product-App.git
cd Product-App
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Start the Development Server
sh
Copy
Edit
npm start
💡 The app will be available at http://localhost:3000

🏗️ Project Structure
bash
Copy
Edit
/product-app
│── /src
│   │── /components    # UI components (ProductCard, Controls, Pagination, etc.)
│   │── /context       # Global state management (ProductContext.js)
│   │── /hooks         # Custom React hooks (useProducts.js)
│   │── /pages         # Main pages (ProductPage.js)
│   │── App.js         # Root component
│   │── App.css        # Styles
│── package.json
│── README.md
✨ Technologies Used
🔹 React.js - Component-based UI
🔹 React Hooks (useState, useEffect, useContext)
🔹 Local Storage for persistence
🔹 CSS for styling
🔹 Git & GitHub for version control
