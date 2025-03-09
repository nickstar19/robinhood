import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import '../style.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [formData,setFormData] = useState({
        memberName:'',
        memberEmail:'',
        password:'',
        confirmPassword:'',
        addedStatus:0
    });
    const[errorMessage,setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword)
        {
            setErrorMessage('Passwords do not match!');
            return;
        }else
            setErrorMessage('');

        try{
            const response = await axios.post('http://localhost:4000/user/signup',formData);
            console.log(response.data);
            navigate('/signin')

        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
        <Navbar />
        <div className='container signup'>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input type="text" className="form-control" id="inputAddress" name="memberName" placeholder="Name" 
                        onChange={handleChange}
                        value={formData.memberName}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name="memberEmail" placeholder="Email" 
                        onChange={handleChange}
                        value={formData.memberEmail}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" name="password" placeholder="Password" 
                    onChange={handleChange}
                    value={formData.password}/>
                </div>
                <div className="form-group">
                    <label for="inputPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="inputPassword4" name="confirmPassword" placeholder="Confirm Password" 
                    onChange={handleChange}
                    value={formData.confirmPassword}/>
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </div>

                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default Signup
