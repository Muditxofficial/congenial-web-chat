import React from 'react'
import registerImage from '../../assets/images/register.svg'
import {Link} from 'react-router-dom'
import './Auth.scss'
const Register = () => {
    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div>
                    <div id='image-section'>
                        <img src={registerImage} alt='Register'/>
                    </div>
                </div>
                <div id='form-section'>
                    <h2>Create a Account</h2>
                    <form>
                        <div className='input-field'>
                            <input placeholder='First Name'/>
                        </div>
                        <div className='input-field'>
                            <input placeholder='Last Name'/>
                        </div>
                        <div className='input-field'>
                            <input placeholder='Email'/>
                        </div>
                        <div className='input-field'>
                            <select>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <input placeholder='Password'/>
                        </div>
                        <button>Register</button>
                    </form>
                    <p>Already have a have account ? <Link to ='/login'>Login now..</Link></p>
                </div>
            </div>           
        </div>
    )
}

export default Register
