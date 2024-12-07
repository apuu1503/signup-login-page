
# Signup-Login Page with Password Strength Indicator

This is a simple Signup/Login page built using React and Formik for handling forms. It includes a password strength indicator that checks for the strength of the password based on certain criteria. The project also uses CSS for styling and includes basic form validation.

## Features

- **Login Form**: Allows users to input their email and password to login.
- **Signup Form**: Provides an option for users to sign up for a new account.
- **Password Strength Indicator**: Dynamically calculates and displays the strength of the password based on the following criteria:
  - At least one uppercase letter (`A-Z`).
  - At least one number (`0-9`).
  - At least one special character (`!@#$%^&*(),.?":{}|<>`).
  - Minimum length of 6 characters.
  
## Tech Stack

- **React**: For building the user interface.
- **Formik**: For handling form state and validation.
- **Yup**: For form validation schema.
- **CSS**: For styling the components.
  
## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/signup-login-page.git
   ```

2. Navigate to the project folder:
   ```bash
   cd signup-login-page
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## File Structure

```
signup-login-page/
│
├── public/               # Static assets (e.g., images)
├── src/                  # Source files
│   ├── components/       # React components (e.g., LoginForm, PasswordStrengthIndicator)
│   ├── styles/           # CSS styles
│   ├── App.tsx           # Main React component
│   └── index.tsx         # Entry point of the application
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Usage

1. **Login Form**: 
   - Users can input their email and password to login.
   - The `Remember Me` checkbox will allow temporary storing of email and password.

2. **Password Strength Indicator**: 
   - As the user types in the password, the strength indicator will show the current password strength (Weak, Medium, Strong) based on the defined criteria.

3. **Signup Form**:
   - Provides a signup option for users without an account.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.
```   ```
## Author
ApurvaSukale
