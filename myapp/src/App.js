
import React from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const adminUSer = {
    email: "admin@admin.com",
    password: "admin1234"
  }
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);
  }
  const Logout = () =>{
    console.log("Logout");
  }
  return (
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        {/*ERROR! */}
        <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name"></>
        </div>

      </div>
    </form>
  )
export default App;
