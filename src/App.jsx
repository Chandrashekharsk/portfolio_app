import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, ForgetPassword, Testimonials, PageNotFound,Feedbacks, Footer,Home, Education, Projects,Skills, Experience, SignIn, SignUP } from "./components/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/education' element={<Education/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route  path='/feedbacks' element={<Feedbacks/>} />
      <Route path='/experience' element={<Experience/>} />
      <Route path='/testimonials' element={<Testimonials/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUP/>} />
      <Route path='/forget-password' element={<ForgetPassword/>} />
      <Route path='/*' element={<PageNotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
