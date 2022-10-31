import React from 'react'
import './Register.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState();
    const[mno,setMno]=useState();


    const changeHandler=(e)=>{
        if(e.target.name=="username"){
            const pername=e.target.value;
            console.log(pername);
            setName(pername);
        }else if(e.target.name=="useremail"){
            const peremail=e.target.value;
            setEmail(peremail);
    }else if(e.target.name=="userpassword"){
        const perpass=e.target.value;
        setPassword(perpass);
    }else{
        const permno=e.target.value;
        setMno(permno);
    }
}

const regUser=()=>{
    let item={name,email,password,mno};
    console.log(item);

}
  return (
 <>
  <h1 className="head">cognifi</h1>
  <p>Create your account</p>
 <form class="box">
    <div>
   <label>Name</label>
        <input type="text" name="username" value={name} onChange={changeHandler}/>
        </div>
        <div>
  <label>E-mail</label>
        <input type="email"  name="useremail"  value={email} onChange={changeHandler}/>
        </div>
        <div>
        <label>Password</label>
        <input type="password"  name="userpassword"  value={password} onChange={changeHandler}/>
        </div>
        <div>
        <label>Mobile no</label>
        <input type="number"  name="usermno"  value={mno} onChange={changeHandler}/>
        </div>

        
</form>
<Link to="/show"><button onClick={regUser}>Register</button></Link>
<Link to="/login"><button>Already Registerd log in</button></Link>
 </>
  )
}

export default Register