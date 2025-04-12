import { useState } from 'react'
import './App.css'
import { Bounce, ToastContainer} from 'react-toastify';
import Router from './Routes/Router';

function App() {
  const [backgroundcolor, setBackgroundcolor] = useState('true')

  

  return (
    <div >
      
       <ToastContainer 
       position="top-right" 
       autoClose={5000}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
       transition={Bounce}
        />
      <Router />
      <p  className=  ' p-2 bg-black text-white right-0 top-[20px] fixed ' >Dark</p>
    </div>
  )
}

export default App
