"use client"
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'; // Import the CSS file here

import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const SignUpForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState("");

    return (
        <div>
            <h2>Sign Up</h2>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email is required"),
                    password: Yup.string()
                        .min(6, "Password must be at least 6 characters")
                        .required("Password is required"),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref("password"), null], "Passwords must match")
                        .required("Confirm your password"),
                })}
                onSubmit={(values, { resetForm }) => {
                    setSuccessMessage("Sign Up Successful");
                    resetForm();
                }}
            >
                {({ values }) => (
                    <Form aria-labelledby="signup-form">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="div" className="error" />

                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="div" className="error" />

                        <PasswordStrengthIndicator password={values.password} />

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field name="confirmPassword" type="password" />
                        <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="error"
                        />

                        <button type="submit">Sign Up</button>
                    </Form>
                )}
            </Formik>
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default SignUpForm;
