import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleAuthentication } from "../../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../../slices/userSlice.js";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./styles/signin.css"; // Import the CSS file

const SignIn = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().min(2).required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const signInWithEmail = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("User signed in:", userCredential.user);
      let username = capitalizeFullName(data.username);
      setCookie("username", username, 1);
      dispatch(setUsername(username));
      toast.success('Signed In Successfully', {});
      navigate("/feedbacks"); // Redirect after successful sign-in
    } catch (error) {
      console.error("Error signing in:", error.message);
      toast.error('Wrong Credentials!', {});
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuthentication);
      console.log("Signed In with Google:", res.user);
      const username = res.user.displayName;
      dispatch(setUsername(username));
      toast.success('Signed In Successfully', {});
      navigate("/");
    } catch (error) {
      console.error("Error with Google sign-in:", error.message);
      toast.error('Something went wrong!', {});
    }
  };

  const onSubmit = (data) => {
    signInWithEmail(data);
  };

  return (
    <div className={`flex h-screen justify-center pb-3 ${theme === "light" ? "bg-white text-black" : "text-white bg-gray-900"}`}>

      {/* Go Back Button */}
      <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute rounded-full  pl-64  pt-16 top-3 left-3 text-xl"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

      <form onSubmit={handleSubmit(onSubmit)} className={`${theme === "light" ? "bg-gray-200 text-black" : "text-white bg-gray-800"} sign-in-form relative`}>
        <h1 className={`sign-in-title ${theme === "light" ? " text-black" : "text-white"}`}>Sign In</h1>
        
        <div className="form-group">
          <input placeholder="Username" type="text" {...register("username")} className={`form-input ${theme === "light" ? " text-black bg-white" : "text-white bg-black"}`} />
          <p className="form-error">{errors.username?.message}</p>
        </div>
        
        <div className="form-group">
          <input placeholder="Email" type="email" {...register("email")} className={`form-input ${theme === "light" ? " text-black bg-white" : "text-white bg-black"}`} />
          <p className="form-error">{errors.email?.message}</p>
        </div>
        
        <div className="form-group">
          <input placeholder="Password" type="password" {...register("password")} className={`form-input ${theme === "light" ? " text-black bg-white" : "text-white bg-black"}`} />
          <p className="form-error">{errors.password?.message}</p>
        </div>
        
        <input type="submit" value="Sign In" className="form-submit" />

        <p className="text-center">don&apos;t have an account? go to <Link className="text-blue-700 py-1" to={"/sign-up"}>Sign Up</Link></p>
        
        <div className="mt-3">
          <Link to={"/forget-password"} className="text-blue-500">forgot password</Link>
        </div>
        
        <p className="text-center">or</p>
        
        <button type="button" onClick={signInWithGoogle} className="social-button google-button">
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
