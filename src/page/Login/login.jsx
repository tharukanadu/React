import React from 'react'
import './login.css'
import user from '../../assets/img/user1.png';


const Login = () => {
  return (
    <div className='main_component'>
   <div id='upBar'>
    <h1 id='welcome'>Welcome to our Website</h1>
    <img id='user' src={user} alt="this is car image" />
    </div>
   <div id='middleBar'>
   <label for="email"
   id='email'>Email</label>
   <input type="text" placeholder='UseCustomer' />
   <label for="password" id='password'>Password</label>
    <input type="password" id='txtpassword' placeholder='Password' />
    </div>
   <div id='underBar'>
    <button id='login_btn'><a href='/Dashboard' id='a_login'>Login</a></button>
    <button id='clear_btn'>Clear</button>
   </div>
    </div>
    
  );
}
export default Login

