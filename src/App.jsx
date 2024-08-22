import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Testimonials, PageNotFound,Feedbacks, Footer,Home, Education, Projects,Skills, Experience, SignIn } from "./components/index"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/education' element={<Education/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route  path='/feedbacks' element={<Feedbacks/>} />
      <Route path='/experience' element={<Experience/>} />
      <Route path='/testimonials' element={<Testimonials/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/*' element={<PageNotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
