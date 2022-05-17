import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./components/Auth";

function App() {
  return (
    <AuthContextProvider>
        <Router>
            <Routes>
              <Route path="/" element={<SignIn/>}/>
              <Route exact path="/signup" element={<SignUp/>}/>        
              <Route exact path="/account" element={<Account/>}/>        
            </Routes>
        </Router>
    </AuthContextProvider>
  );
}

export default App;
