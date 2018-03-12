import React from 'react';
import { login } from '../fakeAuth';

const Login = ({ history }) => (
  <div>
    <h3>Login</h3>
    <button 
      className="btn" 
      onClick={ () => {
      login() 
      history.push('/dashboard')
    }}>
    Login 
    </button> 
  </div>
  
)

export default Login; 