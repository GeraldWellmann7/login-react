import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "..//firebase";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import { useState, useEffect } from "react";

export function MyRoutes() {
    const [userName,setUserName]=useState([])
    useEffect(()=>{
     auth.onAuthStateChanged((user)=>{
       if(user){
         setUserName(user.displayName)
       }else setUserName("")
     })
    },[])
     
     return (
       <Router>
         <Routes>
           <Route exact path="/" element={<Home name={userName}/>} />
           <Route exact path="/login" element={<Login />} />
           <Route exact path="/signup" element={<Signup />} />
         </Routes>
       </Router>
     );
   }
   