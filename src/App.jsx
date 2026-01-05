import React from 'react'
import Login from './pages/Login'
import Layout from "./Layout/Layout"
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Lead from "./pages/Lead"
import Employ from "./pages/Employee"
import Pagenotfound from './pages/pageNotFound';
import Logout from "./pages/logout"
import { ToastContainer } from 'react-toastify';
import Register from "./pages/Register"
const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path= "/register" element={<Register/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
      <Route path='/logout' element ={<Logout/>}/>
      

      <Route element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/lead' element={<Lead/>}/>
      <Route path='/employee' element={<Employ/>}/>

</Route>

    </Routes>
    

    </>
  )
}

export default App