Food Delivery App 🍔🍕🍱

OVERVIEW

This is a full-stack food delivery application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app offers a seamless food ordering experience with an integrated payment gateway and robust admin panel functionalities.

FEATURES
1. User Interface
A responsive and intuitive UI designed for an effortless browsing and ordering experience.
Users can:
    Browse a menu with categories and detailed descriptions.
    Add items to their cart and place orders.
    Track the status of their orders.
2. Admin Panel
Comprehensive dashboard for managing the application.
Admins can:
    Add, update, and delete menu items.
    Monitor and manage user orders.
    View sales reports and analytics.
3. Payment Gateway
    Secure and reliable integration with a payment gateway.
    Supports online payments for a hassle-free checkout experience.
4. Backend Services
    A RESTful API to handle requests efficiently.
    Authentication and authorization implemented for secure access.
5. Database
    MongoDB stores all data, including user details, menu items, orders, and transaction logs.


How to Run Locally

Prerequisites
    Node.js installed
    MongoDB running locally or a connection string for a hosted MongoDB instance

Steps
    1. Clone the Repository
        git clone <repository-url>
        cd <project-folder>
    2. Install Dependencies
        npm install
        cd client
        npm install
        cd ..
    3. Set Up Environment Variables
        Create a .env file in the root directory with the following details:
        PORT=5000
        MONGO_URI=<Your MongoDB URI>
        PAYMENT_GATEWAY_KEY=<Your Payment Gateway API Key>
    4. Run the App
        Start the server:
        npm run server
        Start the client:
        npm run client
    5. Access the App
        Open your browser and go to http://localhost:4000.

Future Enhancements:

    Add a delivery tracking system with real-time updates.
    Support for multiple payment gateways.
    Implement a recommendation system based on user preferences.
