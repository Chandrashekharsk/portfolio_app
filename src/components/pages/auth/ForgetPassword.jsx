import { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../config/firebase-config"; // Ensure correct path to your firebase-config.js
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import './styles/forgetPassword.css'; // Import the CSS file
import { useSelector } from 'react-redux';

const ForgetPassword = () => {
  const {theme} = useSelector((state)=> state.theme)
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!', {
      });
      navigate("/sign-in"); // Navigate to sign-in page after sending the reset email
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.error('No user found with this email!', {
        });
      } else {
        console.error("Error sending password reset email:", error.message);
        toast.error('Failed to send reset email. Please try again.', {
        });
      }
    }
  };

  return (
      <div className={`forget-password-container flex min-h-[84vh] justify-center pb-3 pt-7 ${theme === "light" ? "bg-white text-black" : "text-white bg-gray-900"} `}>
      <h1 className="forget-password-title">Forgot Password</h1>
      <form onSubmit={handlePasswordReset} className="forget-password-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-input ${theme === "light" ? " text-black bg-white" : "text-white bg-black"}`}
            required
          />
        </div>
        <input
          type="submit"
          value="Reset Password"
          className="form-submit"
        />
      </form>
      <p className="text-center mt-4">
        Remember your password? <a href="/sign-in" className="text-link">Sign In</a>
      </p>
    </div>
  );
};

export default ForgetPassword;
