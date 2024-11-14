import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-dark text-center py-2 shadow-lg'>
         <h1 className='text-white'>React Laravel Blog</h1>
     </div>
     <div className='container'>
        <div className="d-flex">
          <h4>Blogs</h4>
          <a href="" className="btn btn-dark">Create</a>
        </div>
     </div>
    </>
  )
}

export default App
