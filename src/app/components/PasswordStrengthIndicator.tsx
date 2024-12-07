import React from "react";
import '../styles/styles.css'; // Import the CSS file here

interface Props {
    password: string;
}

const PasswordStrengthIndicator: React.FC<Props> = ({ password }) => {
    const calculateStrength = (password: string) => {
        if (!password) return "Weak";
        if (password.length < 6) return "Weak"; // Password should be at least 6 characters long
        if (
            /[A-Z]/.test(password) &&    // Contains at least one uppercase letter
            /[0-9]/.test(password) &&    // Contains at least one number
            /[!@#$%^&*(),.?":{}|<>]/.test(password) // Contains at least one special character
        ) {
            return "Strong";
        }
        return "Medium"; // Default to Medium if it doesn't meet all criteria for Strong
    };

    const strength = calculateStrength(password);
    const strengthColor =
        strength === "Strong" ? "green" : strength === "Medium" ? "orange" : "red";

    return (
        <div>
            <p style={{ color: strengthColor }}>Strength: {strength}</p>
        </div>
    );
};

export default PasswordStrengthIndicator;
