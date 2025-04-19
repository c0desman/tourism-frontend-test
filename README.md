🌍 Tourism Application Frontend
Welcome to the frontend of the Tourism Application, built with Next.js and Tailwind CSS. This application provides a seamless user experience for travelers, offering features like user registration, login, and password reset functionalities.

🚀 Features
User Registration: Allows users to create an account with their email and password.

User Login: Secure login mechanism with token-based authentication.

Password Reset: OTP-based password reset process for account security.

Responsive Design: Fully responsive design using Tailwind CSS for optimal viewing on all devices.

📦 Installation
Prerequisites
Ensure you have the following installed:

Node.js

npm or Yarn

Next.js

Steps
Clone this repository:

bash
Copy
Edit
git clone https://github.com/yourusername/tourism_frontend.git
cd tourism_frontend
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env.local file in the root directory.

Add the following line:

ini
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:5000  # Replace with your backend URL
Run the development server:

bash
Copy
Edit
npm run dev
Navigate to http://localhost:3000 in your browser to see the application in action.

🔗 Backend Integration
This frontend communicates with the backend API for user authentication and management. The backend repository is available at:

API Base URL: http://localhost:5000/ (adjust if hosted elsewhere)

Available Routes
POST /resetpassword: Resets the user's password after verifying the OTP.

POST /register: Registers a new user.

POST /login: Logs in an existing user.

Refer to the backend repository for more details.

🧱 Project Structure
/pages: Contains route-based components like login, registration, and password reset pages.

/components: Reusable UI components such as input fields and buttons.

/styles: Global styles and Tailwind CSS configurations.

/utils: Utility functions for tasks like form validation.

/public: Static assets like images and icons.

🤝 Contributing
We welcome contributions! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Make your changes.

Commit your changes (git commit -am 'Add feature').

Push to the branch (git push origin feature-name).

Create a new Pull Request.

Please ensure your code adheres to the project's coding standards and passes all tests.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more information.