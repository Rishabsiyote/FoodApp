import React, { useState } from "react";
import data from "../data/data"
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const  data = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    
    const userData =  data.find((user) => user.username === uname.value);

    
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate("/")
      }
    } else {
    
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div style={{fontSize:'12px',color:'red',marginLeft:'5rem'}}>{errorMessages.message}</div>
    );

  const renderForm = (
    <div>
      <form style={{display:'flex',marginTop:"2rem",flexDirection:'column',gap:"1rem",justifyContent:'center',alignItems:'center'}} onSubmit={handleSubmit}>
        <div >
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div >
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div onClick={()=>navigate("/registernow")} style={{fontSize:'14px',cursor:'pointer'}}>Dont have account? <span style={{color:"blue"}}>Register now</span></div>
        <div >
          <button style={{color:'#FFF',background:'blue',border:'none',padding:'0.5rem 1rem',borderRadius:'5px'}} onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{
        marginTop:"5rem",
        display:'flex',
        boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
        padding:'5rem',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <div >Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;