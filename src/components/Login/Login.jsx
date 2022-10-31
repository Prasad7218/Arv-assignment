import { useState } from "react";
import Home from "../Home/Home";
import "./Login.css"
const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState();

    const changeHandler=(e)=>{
        if(e.target.name=="useremail"){
            const peremail=e.target.value;
            setEmail(peremail);
        }else if(e.target.name=="userpassword"){
            const perpass=e.target.value;
            setPassword(perpass);
        }
    }

    const login=()=>{
        let data={email,password};
        console.log(data);
    }
    return(
        <>
        <h1 className="head">cognifi</h1>
        <p>Log in to your account</p>
        <form className="box">
       <div>
  <label>E-mail</label>
        <input type="email"  name="useremail"  value={email} onChange={changeHandler}/>
        </div>
        <div>
        <label>Password</label>
        <input type="password"  name="userpassword"  value={password} onChange={changeHandler}/>
        </div>
        </form>
        <Home msg={email} />
        <button onClick={login}>Login</button>
        </>
    )
}

export default Login;