import React,{useState,useEffect} from 'react';
import './register.css';
// import '../login/login/login.css';
import Button from '../../utilities/button/Button';
import { observer } from 'mobx-react-lite';
import Popup from './registerPop';
import {LoginHandler} from '../../MobxState/LogInfo';
import {emailChecker} from '../../FunctionsValidator/BasicVerifier'

function Register() {
    const [fname,setFname]=useState(null);
    const [lname,setLname]=useState(null);
    const [email,setEmail]=useState(null);
    const [document,setDocument]=useState([]);
    const [pass,setPass]=useState(null);
    const [check,setCheck]=useState(false);
    const [inst,setInst]=useState(null);
    const register=(e)=>{
        e.preventDefault();
        console.log(`${fname} ${lname} ${email}`);
        console.log(`${document}`);
        console.log(LoginHandler.logged);
    }
    return (
        <div className='container'>
    {/* <Popup/> */}
<div className="register">
    <div className="register__left">
        <div className="container_register">
            <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="company logo" className='register__logo-1' />
            <h1 className="heading_register">Create your health card account</h1>
            <div className="form_register">
                {/* first name field here */}
                <div className="fieldR part_register_1">
                    <label htmlFor="fname" className="input_label">First Name</label>
                    <input type="text" onChange={(e)=>{setFname(e.target.value)}} name="fname" id="fname" className="input_textR" />
                    {/* <AlternateEmailIcon fontSize="medium"/> */}
                </div>
                {/* last name field here */}
                <div className="fieldR part_register_2">
                    <label htmlFor="lname"  className="input_label">Last Name</label>
                    <input type="text" name="lname" onChange={(e)=>{setLname(e.target.value)}} id="lname" className="input_textR" />
                    {/* <AlternateEmailIcon fontSize="medium"/> */}
                </div>
                {/* Email address */}
                <div className="fieldR part_register special2">
                    <label htmlFor="email" className="input_label">Email</label>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" className="input_textR" />
                    {/* <AlternateEmailIcon fontSize="medium"/> */}
                </div>
                {/* password */}
                <div className="fieldR part_register_1">
                    <label htmlFor="passwordf" className="input_label">Password</label>
                    <input type="password" name="passwordf" id="passwordf" className="input_textR" />
                    <span className="extern-type">Atleast 8 characters long.</span>
                    {/* <AlternateEmailIcon fontSize="medium"/> */}
                </div>
                {/* Confirm Password */}
                <div className="fieldR part_register_2">
                    <label htmlFor="passwordl" className="input_label">Retype Password</label>
                    <input type="password" name="passwordl" id="passwordl" className="input_textR" />
                    <span className="extern-type">Atleast 8 characters long.</span>
                    {/* <AlternateEmailIcon fontSize="medium"/> */}
                </div>
                <div className="fieldR part_register_1">
                    <label htmlFor="organization" className="input_label">Institution/Organization name</label>
                    <input type="text" name="organization" id="organization" className="input_textR" />
                    {/* <AlternateEmailIcon fontSize="medium"/> */}
                </div>
                {/* Confirm Password */}
                <div className="fieldR part_register_2">
                    <label for="user-role" className="input_label"> User Role</label>
                    <select name="user-role" className="input_textR special">
                        <option value="0" default disabled>Select Role</option>
                        <option value="1">Institution</option>
                        <option value="1">Doctor/Hospital</option>
                    </select>
                    {/* <AlternateEmailIcon fontSize="medium"/> */}
                </div>
                <div className="fieldR part_register special2">
                    <label htmlFor="file1" className="input_label">Upload Proof Documents</label>
                    <input type="file" onChange={e=>{setDocument(e.target.files[0])}} name="file1" id="file1" className="input_textR" />
                </div>
                <div className="field-check">
                    <input type="checkbox" id="register-agree" name="checker" className="toggle-input" />
                    <span className="info">Do you agree to the <a href="#" className="sign_up_link">terms and conditions?</a></span>
                </div>
                {/* Register Button */}
                <div className="field part_register">
                    <Button text="Create Account" onClick={register} />
                </div>
            </div>
        </div>
    </div>
    <div className="register__right">
        <div className="login__right">
            <img src={process.env.PUBLIC_URL + '/assets/headth.gif'} alt="a basic animation" className="right__img" />
        </div>
    </div>
</div>
</div>
    )
}

export default observer(Register);