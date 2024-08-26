import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuthentication } from "../../../config/firebase-config.js";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./styles/signin.css"; // Import the CSS file
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../../slices/userSlice.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUP = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const signUpWithEmail = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      if (userCredential) {
        toast.success('Signed Up successfully', {
        });
        navigate("/sign-in"); 
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.warning('Email already exists, please Sign In!', {
        });
        navigate("/sign-in");
      } else {
        console.error("Error signing up:", error.message);
        toast.error('Something went wrong!', {
        });
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuthentication);
      const username = res.user.displayName;
      dispatch(setUsername(username));
      toast.success('Signed In successfully', {
        position: toast.POSITION.TOP_RIGHT, // Ensure the position is available
      });
      navigate("/");
    } catch (error) {
      console.error("Error with Google sign-in:", error.message);
      toast.error('Something went wrong!', {
        position: toast.POSITION.TOP_RIGHT, // Ensure the position is available
      });
    }
  };

  const onSubmit = (data) => {
    signUpWithEmail(data);
  };

  return (
    <div className={`flex h-screen justify-center pb-3  ${theme === "light" ? "bg-white text-black" : "text-white bg-gray-900"} `}>
      <form onSubmit={handleSubmit(onSubmit)} className={`${theme === "light" ? "bg-gray-200 text-black" : "text-white bg-gray-800"} sign-in-form`}>
        <h1 className={`sign-in-title ${theme === "light" ? " text-black" : "text-white"}`}>Sign Up</h1>
        <div className="form-group">
          <input placeholder="Email" type="email" {...register("email")} className={`form-input ${theme === "light" ? " text-black bg-white" : "text-white bg-black"}`}/>
          <p className="form-error">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <input placeholder="Password" type="password" {...register("password")} className={`form-input ${theme === "light" ? " text-black bg-white" : "text-white bg-black"}`} />
          <p className="form-error">{errors.password?.message}</p>
        </div>
        <input type="submit" value="Sign Up" className="form-submit" />
        <p className="text-center">Already have an account? Go to <Link className="text-blue-700 py-1" to={"/sign-in"}>Sign In</Link></p>
        <p className="text-center pb-1 text-md">or</p>
        <button type="button" onClick={signInWithGoogle} className="social-button google-button">
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default SignUP;
