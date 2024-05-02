import { useState } from "react";
import React from "react";
import axios from "axios";
export default function Register(){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [gender,setGender]=useState();
    const [role,setRole]=useState();
    const [address,setAddress]=useState();
   async function handleSubmit(e){
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:8080/register',{
                name,email,password,gender,role,address
            } );
            console.log(response.data);
            if(response.data=='registersuccess'){
                window.location.href='/login';
            }
            else if(response.data='registerfail'){
                alert("You aleady registered");
            }
            else{
                alert("register failed");
            }
        }
       
        catch(error){
            console.log(error);
        }
    }
    
    return(
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
<div>
<label>user name:</label>
<input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} required/>
</div>
<div>
<label>Email Id:</label>
<input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
</div>
<div>
<label>Password:</label>
<input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
</div>
<div>
<label>Gender:</label>
<input type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value)}/>Male
<input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/>Female
<input type="radio" name="gender" value="Others" onChange={e=>setGender(e.target.value)}/>Other
</div>
<div>
<label>Role:</label>
<input type="radio" name="role" value="Admin" onChange={e=>setRole(e.target.value)}/>Admin
<input type="radio" name="role" value="User" onChange={e=>setRole(e.target.value)}/>User
</div>
<div>
<label>Address:</label>
<textarea name="address"  placeholder="Enter your address here" value={address} onChange={e=>setAddress(e.target.value)} required></textarea>
</div>
<div>
<input type="submit" value="Register"/>
</div>
</form>
</>
    )
}
