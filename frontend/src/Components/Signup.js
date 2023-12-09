import React, { useState } from 'react';
import Log from '../Images/Log.png';
import '../Signup.css';
import User from '../Images/username.PNG';
import Padlock from '../Images/password.PNG';
import Name from '../Images/name.PNG';
import Email from '../Images/email.PNG';
import Mobile from '../Images/mobile.PNG';
import Confirm from '../Images/confirm.PNG';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    telephone: '',
    username: '',
    password: '',
    isRegisterd: 'true',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/api/v1/tourist/', formData);
      navigate('/');
      alert("hi");
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='signup'>
      
      <div className='h2'>Sign Up</div>

      <div className='contain'>
        <div className='header'>
          <form onSubmit={handleSubmit}>
            
            <div className='inputsub'>
              
              <div className='input'>
                
                <input
                  type='text'
                  placeholder= 'Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                
                <input
                  type='text'
                  placeholder='Mobile No'
                  name='telephone'
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                
                <input
                  type='text'
                  placeholder='Country'
                  name='country'
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='input'>
                
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div id='submit'>
                <button type='submit'>Create An Account</button>
              </div>
            </div>

            
            
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
