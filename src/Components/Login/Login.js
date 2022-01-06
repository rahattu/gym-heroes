import React, { useContext, useState } from 'react';
import {getAuth, GithubAuthProvider,signInWithPopup, GoogleAuthProvider,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import initializeFirebase from '../Firebase/FirebaseInit';
import { userContext } from '../../App';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
initializeFirebase()

const Login = () => {
  const location=useLocation();
const history=useHistory();
let { from } = location.state || { from: { pathname: "/" } };
  const [isLog,setIsLog]=useState(false)
  const [auths,setAuth]=useContext(userContext)
  const [newUser,setNewUser]=useState(false)
    const auth = getAuth();
    const [user,setUser]=useState({
      isSigned:false,
      name:'',
      success:false,
      email:'',
      photo:'',
      password:''
    })
    console.log(user)

    const handleGoggleSignUp=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
    
    const user = result.user;
    console.log(user)
    setAuth({
      name:user.displayName,
      email:user.email,
      photo:user.photoURL
      
    })
    sessionStorage.setItem('name',  user.displayName)
    sessionStorage.setItem('pic', user.photoURL)
    window.location.replace("/");
    setIsLog(true)
    
    history.replace(from);
    console.log(user);
  }).catch((error) => {
   console.log(error)
    
  });

    }

    

    const handleGoggleLogOut=()=>{
      const auth = getAuth();
signOut(auth).then(() => {
  setIsLog(false)
  alert("You have Successfully Log Out")
 
}).catch((error) => {
  console.log(error)
});
    }

  
    const handleChange=(e)=>{
      let fieldValid=true;
      if(e.target.name==="email"){
         fieldValid=/\S+@\S+\.\S+/.test(e.target.value)
  
        
       
      }
      if(e.target.name==="password"){
        const isPasswordValid=e.target.value.length>6;
        
        const passwordNumber= /\d{1}/.test(e.target.value)
        fieldValid=isPasswordValid && passwordNumber
  
  
      }
      if(fieldValid){
        const newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)
      }

    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    alert("you have successfully signed up, please log in");

    setNewUser(true)
  })
  .catch((error) => {
   console.log(error)
   alert(error.message)
  });
}
else{
  signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setAuth({
      email:user.email,
      name:user.name
    })
    sessionStorage.setItem('email',  user.email)

    window.location.replace("/services");

    history.replace(from)
    // ...
  })
  .catch((error) => {
    console.log(error.message)
    alert(error.message)
  });
}
    }

    
  
    return (
        <div className='container d-flex justify-content-center'>
       
           <div className='row'>
             <div  className='col-md-6 m-auto'>
             <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="userName"/>
   <label htmlFor="newuser">New-user-Sign-up</label>
     
     
     <form onSubmit={handleSubmit}>
       {newUser &&
       <input onChange={handleChange} name="name" type="text" placeholder="name"/>


}
       <br/>
       <input required name="email" onChange={handleChange}  placeholder="Your Email Address" type="email"/>
       <br/>
       <input  name="password" onChange={handleChange} placeholder="Your Password" type="password" required  />
       <br/>
       <input type="submit" value={newUser ? 'Sign-up' :'Sign-in'}/>
     </form>

    
     
     <p style={{color:'red'}}>{user.error}</p>
     
     {
       user.success && <p style={{color:'green'}}>user {newUser? "successfully": "logged in"} created</p>
     }


  

             </div>
             { isLog ? <button onClick={handleGoggleLogOut} className='btn btn-danger'>Goggle_Sign_Out </button> : <button className='text-center btn btn-primary'onClick={handleGoggleSignUp}>Goggle Sign Up</button>
             }
            
           </div>
  
     
    
           
          
             
              
                
              
            
          
          
              </div>
          
       
       
    );
};

export default Login;