# 🍔 Tomato - Food Delivery Web Application

A full-stack food delivery platform where users can browse food items, add them to their cart, place orders with Stripe integration, and track their orders. The application also includes a powerful admin panel to manage food items and track user orders.

---

## 📌 Features

### 🛍️ User Side
- **Product Browsing:** Users can view a list of food items on the homepage.
- **Cart System:** Add items to the cart and view item details, quantity, and total amount.
- **Checkout Process:**
  - Fill delivery details (Name, Phone, Address, City, etc.)
  - Redirect to **Stripe** for secure payments.
- **Order Tracking:** Users can track the status of their orders in real-time.
- **Authentication:** Sign Up and Login functionality.

### 🛠️ Admin Panel
- **Add Food Items:** Admins can add new food items with name, image, price, etc.
- **View & Manage Products:** Edit or delete food items.
- **Track Orders:** Monitor user orders, payment status, and delivery progress.

---

## 🧰 Tech Stack

### Frontend
- **React.js** – For building a dynamic and responsive user interface
- **Axios** – For API communication

### Backend
- **Node.js & Express.js** – Server and REST API development
- **MongoDB** – Database for storing user, product, and order information
- **Stripe API** – Secure payment processing
- **JWT** – For user and admin authentication

---


## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- Stripe account
- npm or yarn

### Installation

1. **Clone the repository**


        git clone https://github.com/Uvajanani/Food-Delivery-App.git
        cd foodie


2. Install frontend & backend dependencies


# Install backend dependencies
      cd Backend
      npm install

# Install frontend dependencies
    cd Frontend
    npm install

Set up environment variables

Create a .env file in the /server directory with the following keys:

    MONGO_URI=your_mongo_db_connection
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key


3. Run the development servers

# Start backend
    cd Backend
    npm run dev

# Start frontend
    cd Frontend
    npm start

---

## 💳 Stripe Integration
 - Users are redirected to Stripe Checkout to securely complete their payments.
 - After successful payment, the order is recorded in the database and can be tracked via the user dashboard.

## 🔐 Authentication & Authorization
- Users and admins have separate access levels.
- Protected routes ensure only authorized users can access certain parts of the application.

## 🧑‍💻 Author

Uvajanani
MERN Stack Developer
