import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Purse from '../src/Purse'
// import Login from './Registration/Login'
// import SignUp from './Registration/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <SignUp/> */}
  {/* <Login/> */}
   <Purse/>

   </>
  )
}

export default App
