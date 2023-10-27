import React, { useState } from 'react';
import './loginsignup.css';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

const Loginsignup = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <div className="user-icon">
            <AiOutlineUser />
          </div>
          <input type="text" placeholder="Name" />
        </div>}


        <div className="input">
          <div className="user-email">
            <AiOutlineMail />
          </div>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <div className="user-password">
            <RiLockPasswordFill />
          </div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">
        Forgot Password? <span>Click Here!</span>
      </div>}
     

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
