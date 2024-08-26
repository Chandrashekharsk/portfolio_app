import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleAuthentication } from "../../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./styles/signin.css"; // Import the CSS file
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../../slices/userSlice.js";
import { toast } from 'react-toastify';

const SignIn = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const schema = yup.object().shape({
    username: yup.string().min(2).required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  // function to set username (made readnoly here) in cookies  -> (name, value, hours)
  function setCookie(name, value, hours) {    
    let expires = "";
    if (hours) {
        const date = new Date();
        date.setTime(date.getTime() + (1 * 60 * 60 * 1000)); // Convert hours to milliseconds
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function capitalizeFullName(fullName) {
  // Split the full name into an array of words
  const words = fullName.split(' ');
  // Map over each word, capitalizing the first letter and converting the rest to lowercase
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  // Join the array back into a single string with spaces between words
  return capitalizedWords.join(' ');
}

  const signInWithEmail = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("User signed in:", userCredential.user);
      let username = data.username;
      username = capitalizeFullName(username);
      setCookie("username", username, 1);
      dispatch(setUsername(username));
      toast.success('Signed In Succssfully', {
      });
      navigate("/feedbacks"); // Redirect after successful sign-in
    } catch (error) {
      console.error("Error signing in:", error.message);
      toast.error('Wrong Credentials!', {
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuthentication);
      console.log("Signed In with Google:", res.user);
      const username = res.user.displayName;
      dispatch(setUsername(username));
      toast.success('Signed In Succssfully', {
      });
      navigate("/");
    } catch (error) {
      console.error("Error with Google sign-in:", error.message);
      toast.error('Something went wrong!', {
      });
    }
  };

  const onSubmit = (data) => {
    signInWithEmail(data);
  };

  return (
    <div className={`flex min-h-[84vh] justify-center pb-3 pt-7 ${theme === "light" ? "bg-white text-black" : "text-white bg-gray-900"} `}>
      <form onSubmit={handleSubmit(onSubmit)} className={`${theme === "light" ? "bg-gray-200 text-black" : "text-white bg-gray-800"} sign-in-form`}>
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
        <Link to={"/forget-password"} className="text-blue-500  ">forgot password</Link>
        </div>
        <p className="text-center"> or</p>
        
        <button type="button" onClick={signInWithGoogle} className="social-button google-button">
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
