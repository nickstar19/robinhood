import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password,setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "1234321") {
      localStorage.setItem("user", "admin");
      alert("Access Granted! Redirecting...");
      navigate("/admindashboard");
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <div>
      <Navbar />

      <div className='container signup'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="inputPassword">Enter Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/></div>
          <button type="submit" className='btn'>LOGIN</button>
        </form>
      </div>

    </div>
  )
}

export default AdminLogin
