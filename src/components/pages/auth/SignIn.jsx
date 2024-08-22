import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleAuthentication, githubAuthentication } from "../../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./styles/signin.css"; // Import the CSS file
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../../slices/userSlice.js";

const SignIn = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state)=> state.theme);
  const schema = yup.object().shape({
    username: yup.string().min(2).required("Username is required"),
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
      console.log("User signed up:", userCredential.user);
      dispatch(setUsername(data.username));
      navigate("/"); // Redirect after successful sign-up
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuthentication);
      console.log("Signed in with Google:", res.user);
      const username = res.user.displayName;
      dispatch(setUsername(username));
      console.log("userPrint: " + res.user.displayName);
      navigate("/");
    } catch (error) {
      console.error("Error with Google sign-in:", error.message);
    }
  };

  // const signInWithGitHub = async () => {
  //   try {
  //     const res = await signInWithPopup(auth, githubAuthentication);
  //     console.log("Signed in with GitHub:", res.user);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error with GitHub sign-in:", error.message);
  //   }
  // };

  const onSubmit = (data) => {
    signUpWithEmail(data);
  };

  return (
    <div className={`flex justify-center py-4 ${theme==="light"? "bg-white text-black":"text-white bg-gray-900"} `}>
    <form onSubmit={handleSubmit(onSubmit)} className={`${theme==="light"? "bg-gray-300 text-black":"text-white bg-gray-800"} sign-in-form`}>
      <h1 className={`sign-in-title ${theme==="light"? " text-black":"text-white"}`}>Sign Up</h1>
      <div className="form-group">
        <input placeholder="Username" type="text" {...register("username")} className="form-input" />
        <p className="form-error">{errors.username?.message}</p>
      </div>
      <div className="form-group">
        <input placeholder="Email" type="email" {...register("email")} className="form-input" />
        <p className="form-error">{errors.email?.message}</p>
      </div>
      <div className="form-group">
        <input placeholder="Password" type="password" {...register("password")} className="form-input" />
        <p className="form-error">{errors.password?.message}</p>
      </div>
      <input type="submit" value="Sign Up" className="form-submit" />
      <button type="button" onClick={signInWithGoogle} className="social-button google-button">
        Sign In with Google
      </button>
      {/* <button type="button" onClick={signInWithGitHub} className="social-button github-button">
        Sign In with GitHub
      </button> */}
    </form>
    </div>
  );
};

export default SignIn;
