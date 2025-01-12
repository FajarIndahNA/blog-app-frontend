import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetail from './components/BlogDetail';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-dark text-center py-2 shadow-lg'>
         <h1 className='text-white'>R-Blog</h1>
     </div>

    <Routes>
      {/* panggil path grid Blogs */}
      <Route path='/' element={ <Blogs />} />
      <Route path='/create' element={ <CreateBlog />} />
      <Route path='/blog/:id' element={ <BlogDetail />} />

    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
