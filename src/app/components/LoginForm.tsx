"use client"
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/styles.css'; // Import the CSS file here

const LoginForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const rememberedEmail = localStorage.getItem("rememberedEmail");
        if (rememberedEmail) {
            alert(`Remembered email: ${rememberedEmail}`);
        }
    }, []);

    return (
        <div>
            <h2>Login</h2>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false,
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email is required"),
                    password: Yup.string().required("Password is required"),
                })}
                onSubmit={(values) => {
                    setSuccessMessage("Login Successful");
                    if (values.rememberMe) {
                        localStorage.setItem("rememberedEmail", values.email);
                    } else {
                        localStorage.removeItem("rememberedEmail");
                    }
                }}
            >
                <Form aria-labelledby="login-form">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" className="error" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="div" className="error" />

                    <label>
                        <Field name="rememberMe" type="checkbox" />
                        Remember Me
                    </label>

                    <button type="submit">Login</button>
                </Form>
            </Formik>
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default LoginForm;
