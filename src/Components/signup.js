import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Config/firebase'
import '../CSS/login.css'


function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const Register = (()=>{
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            navigate('/home')
        }).catch((error)=>{
            console.log(error);
        })
    })
   

    return(
        <div className="container">
            <div className='SubCon'>
                    <h1>SignUp</h1>
                    <input className='input1' type="email" placeholder="Enter your email" onChange={((e)=> setEmail(e.target.value))}/>
                    <input className='input1' type="password" placeholder="Enter your password" onChange={((e)=> setPassword(e.target.value))}/>
                    <button id="btn2" onClick={Register}>SignUp</button>

                    <span>Dont have an Account?</span> <span>
                    <Link to="/sign-up">Create Account Here</Link>
                    </span>
            </div>
            
        </div>
        
    )
}
export default SignUp;