import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signin = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        memberEmail:'',
        password:''
    });
    const [errorMessage,setErrorMessage] = useState('');
    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value});
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('https://robinhood-22em.vercel.app/user/signin',formData);
            localStorage.setItem('user',JSON.stringify(response.data));
            console.log(response.data);
            setErrorMessage('');
            navigate('/memberdashboard');
        }catch(error){
            setErrorMessage(error);
            console.log(error);
        }
    } 
    return (
        <div>
            <Navbar />
            <div className='container signup'>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" 
                        name="memberEmail"
                        onChange={handleChange}
                        value={formData.memberName}/>
                    </div>

                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" 
                        name="password"
                        onChange={handleChange}
                        value={formData.password}/>
                        
                    </div>

                    <button type="submit" className="btn">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Signin
