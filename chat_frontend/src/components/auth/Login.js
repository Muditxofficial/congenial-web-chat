import React,{useState} from 'react'
import loginImage from '../../assets/images/login.svg'
import {Link} from 'react-router-dom'

import './Auth.scss'
import AuthService from '../../services/authService'
const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        AuthService.login({email,password}).then(res => console.log(res))
        /* axios.post('http://localhost:3001/login',{email, password})
            .then(res => console.log("res",res))
            .catch(err => console.log("err",err)) */
        console.log({email,password})    
    }
    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div>
                    <div id='image-section'>
                        <img src={loginImage} alt='Login'/>
                    </div>
                </div>
                <div id='form-section'>
                    <h2>Hello</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <input 
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            value={email}
                            type='text'
                            placeholder='Email'/>
                        </div>
                        <div className='input-field'>
                            <input 
                            type='password'
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder='Password'/>
                        </div>
                        <button>Login</button>
                    </form>
                    <p>Dont have a account ? <Link to='/register'>Register now..</Link></p>
                </div>
            </div>           
        </div>
    )
}

export default Login
