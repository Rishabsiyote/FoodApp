import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import data from "../data/data"

function RegisterNow() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [database,setDatabase] = useState(data);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    let nme =false;
    let eml =false;
    let pass =false;
    name.length> 5 ? nme = true : nme = false 
    email.includes("@")? eml=true: eml = false
    password.length>5? pass = true: pass = false
    let text = "password should be at least 6 characters long \nname should be at least 6 characters long \nplease enter valid email address"
    // nme && eml && pass == true ? addData :"";
    if(nme==true && eml==true && pass==true){
        setIsSubmitted(true)
        alert("successfully registered")
        navigate("/login")
    }
        else{
            alert(text)
        }
    if(nme==true && eml==true && pass==true)addData();      
  };
function addData(){
        setDatabase( [...database,{ username : email,
            password:password
  }]);
}

  const renderForm = (
    <div>
      <form style={{display:'flex',marginTop:"2rem",flexDirection:'column',gap:"1rem",justifyContent:'center',alignItems:'center'}} onSubmit={handleSubmit}>
        <div >
          <label>Full Name </label>
          <input type="text" name="uname" required onChange={(event) =>
          setName(event.target.value)
        }/>
        </div>
        <div >
          <label style={{marginRight:"2rem"}}>Email  </label>
          <input onChange={(event) =>
          setEmail(event.target.value)
        } type="email" name="uname" required />
        </div>
        <div >
          <label>Password </label>
          <input onChange={(event) =>
          setPassword(event.target.value)
        } type="password" name="pass" required />
        </div>
        <div onClick={()=>navigate("/login")} style={{fontSize:'14px',cursor:'pointer'}}>Already have account? <span style={{color:"blue"}}>Login</span></div>
        <div >
          <button style={{color:'#FFF',background:'blue',border:'none',padding:'0.5rem 1rem',borderRadius:'5px'}} onClick={handleSubmit}>Register Now</button>
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
       {isSubmitted?"":<div >Sign up</div>} 
        {isSubmitted ? <div>User is successfully registered</div> : renderForm}
        
      </div>
    </div>
  );
}

export default RegisterNow;