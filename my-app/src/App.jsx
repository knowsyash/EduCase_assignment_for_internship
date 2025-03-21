import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome'
import Sign from './pages/Sign';
import CreateAccount from './pages/CreateAccount';
import AccountSettings from './pages/AccountSetting';

const App = () => {
  return (
   <Router>
   <Routes>
     <Route path="/" element={<Welcome />} />
     <Route path="/signin" element={<Sign/>} />
     <Route path="/createAccount" element={<CreateAccount/>} />
     <Route path="/account-settings" element={<AccountSettings/>} />
   </Routes>
 </Router>
  )
}

export default App