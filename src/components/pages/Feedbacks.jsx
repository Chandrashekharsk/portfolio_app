import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import './styles/feedbacks.css'; 
import { db, auth } from '../../config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

const Feedbacks = () => {
  const username = useSelector((state) => state.user.value.username);
  const [user] = useAuthState(auth);
  const { theme } = useSelector((state) => state.theme);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const testimonialRef = collection(db, "testimonials")
  const onSubmit = async (data) => {
    console.log(data);

    if(!user?.uid){
      alert("Please login first to create posts");
      navigate("/sign-in");
      return;
    }
    await addDoc(testimonialRef,{
      ...data,
      username: username,
      userId: user?.uid,
      comments :[],
      likes:[]
    })
    navigate("/testimonials");
  };

  return (
    <div className={`container min-h-[84vh] mx-auto pt-1 pb-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-center pt-8`}>
      <div className={`feedbacks-container p-4 max-w-md w-full ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} rounded-lg shadow-lg`}>
        <h2 className={`text-xl text-center font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>We Value Your Feedback</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-group">
            <textarea rows='5' placeholder='write your feedback...'
              id="feedback"
              {...register('feedback', { required: true })}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'} ${errors.feedback ? 'border-red-500' : ''}`}
            />
            {errors.feedback && <span className="text-red-500 text-sm">Feedback is required</span>}
          </div>
          <button type="submit" className={`w-full py-2 px-4 rounded-md font-medium text-white ${theme === 'dark' ? 'bg-green-600' : 'bg-green-500'} hover:bg-green-700`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedbacks;
