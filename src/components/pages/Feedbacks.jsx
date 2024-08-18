import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import './styles/feedbacks.css'; // Ensure this file contains the necessary styles

const Feedbacks = () => {
  const { theme } = useSelector((state) => state.theme);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-center pt-8`}>
      <div className={`feedbacks-container p-4 max-w-md w-full ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} rounded-lg shadow-lg`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>We Value Your Feedback</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: true })}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'} ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: true })}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-300'} ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="feedback" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Feedback</label>
            <textarea
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
