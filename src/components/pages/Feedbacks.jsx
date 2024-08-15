import { useForm } from 'react-hook-form';
import './styles/feedbacks.css';

const Feedbacks = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic
  };

  return (
    <div className="feedbacks-container bg-gray-900"> {/* Added page-background class */}
      <h2 className="feedbacks-title">We Value Your Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="feedbacks-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            {...register('name', { required: true })} 
            className={`input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <span className="error-message">Name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            {...register('email', { required: true })} 
            className={`input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <span className="error-message">Email is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea 
            id="feedback" 
            {...register('feedback', { required: true })} 
            className={`input ${errors.feedback ? 'input-error' : ''}`}
          />
          {errors.feedback && <span className="error-message">Feedback is required</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Feedbacks;
