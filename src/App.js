import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SIgnup from "./pages/SIgnup.js";
import Dashboard from "./pages/Dashboard.js";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <div className="w-full h-[1000px] bg-gray-950 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<SIgnup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard/>
          </PrivateRoute>
          }/>
      </Routes>
    </div>
  );
}

export default App;
