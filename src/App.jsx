import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, PageNotFound, Footer, About,Home, Contact, Education, Projects,Skills, Experience } from "./components/index"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/education' element={<Education/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/experience' element={<Experience/>} />
      <Route path='/*' element={<PageNotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
