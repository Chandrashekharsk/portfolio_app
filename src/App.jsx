import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import {
  Navbar, ForgetPassword, Testimonials, PageNotFound, Feedbacks, Footer,
  Home, Education, Projects, Skills, Experience, SignIn, SignUP, YetNotHosted
} from "./components/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Achievements from './components/pages/Achievements';
import ResumePage from './components/pages/ResumePage';

const App = () => {
  return (
    <BrowserRouter>
      <ConditionalWrapper>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/feedbacks' element={<Feedbacks />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUP />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/not-hosted' element={<YetNotHosted />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </ConditionalWrapper>
    </BrowserRouter>
  );
};

const ConditionalWrapper = ({ children }) => {
  const location = useLocation();
  const publicPath = ['/not-hosted', '/page-not-found','/sign-up','/sign-in'].includes(location.pathname);

  return (
    <>
      {!publicPath && 
      <Navbar />
      }
      {children}
      {!publicPath && 
      <Footer />
      }
    </>
  );
};

export default App;


