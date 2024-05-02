import axios from "axios";
import React,{ useState } from "react";
function Login(){
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const handleSubmit=async (event)=>{
        event.preventDefault();
        
        try{
            const response=await axios.post('http://localhost:8080/login',{
                email:email,password:password
            } );
            console.log(response.data);
            if(response.data=='Adminhome'){
                window.location.href='/admin';
            }
            else if(response.data=='customerhome'){
                window.location.href='/customer'
            }
            else{
                alert("Login failed");
            }
        }
       
        catch(error){
            console.log(error);
        }
    }

    return(
        <>
        <h3>Login</h3>
        <form action="/login" onSubmit={handleSubmit}>
            <div>
            <label>Email Id:</label>
            <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default Login;