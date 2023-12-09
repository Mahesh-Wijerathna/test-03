import React from 'react';
import Logo from '../Images/Logo.png';
import '../Home.css';
import Front from '../Images/Front.png';
import Social from '../Images/SocialN.PNG';
import {Link} from "react-router-dom";


function Home() {
  return (
    <div className='home'>
        
      
          
          
          
          <Link to="/signup/tourist"><button>Tourist</button></Link>
          <Link to="/signup/medical_center"><button>Medical Center</button></Link>
          <Link to="/create_locations"><button>Admin</button></Link>
        
        
    </div>
  )
}

export default Home
