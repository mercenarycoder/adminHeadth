import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';
import Button from '../../utilities/button/Button';
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { observer } from 'mobx-react-lite';
import { emailChecker, passwordStrength } from '../../FunctionsValidator/BasicVerifier'
import Popup from '../register/registerPop';
import {LoginHandler} from '../../MobxState/LogInfo';


function Login(props) {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [err, setErr] = useState([]);
    const [showError,setShowError]=useState(false);
    LoginHandler.checkLogin();
    const redirectIt =async function (e) {
        e.preventDefault();
        // writing code here to temporaily pushing it to dashboard page
        // props.history.push('/dashboard');
        if(!email||!emailChecker(email)) {
            setErr(err=>[...err,"Email supplied by you is not valid."]);
        }
        if(!pass)
        {
            setErr(err=>[...err,"Password need to be supplied first"]);
        }
        if(err.length>0)
        {
            setShowError(true);
            return;
        }
        try {
            const result=await LoginHandler.loginAsync(email,pass);
            if(result.status){
                const {status,msg,token}=result;
                if(status===1){
                    console.log(msg);
                    LoginHandler.login(token);
                }
                else{
                    console.log(msg);
                    setErr(prev=>[...prev,msg]);
                    setShowError(true);
                }
            }
        } catch (error) {
            console.log(error);
            setErr(prev=>[...prev,error]);
            setShowError(true);
        }
    }
    let clearAll=(e)=>{
        setShowError(false);
        setErr([]);
    }
    return (
        <>
        {LoginHandler.logged?<Redirect to="/dashboard"/>:null}
        <div className="container">
            <Popup error={err} visible={showError} onClick={clearAll} />
            <div className='login'>
                <div className="login__left">
                    <div className="container_login">
                        <h1 className="heading_login">Welcome to Health Card</h1>
                        <div className="form">
                            <div className="field">
                                <label htmlFor="email" className="input_label">Email</label>
                                <input type="email" name="email" onChange={e => setEmail(e.target.value)} id="email_1" className="input_text" />
                                <AlternateEmailIcon fontSize="medium" className="icons" />
                            </div>
                            <div className="field">
                                <label htmlFor="password" className="input_label">Password</label>
                                <input type="password" name="password" onChange={e => setPass(e.target.value)} id="password" className="input_text">
                                </input>
                                <AlternateEmailIcon fontSize="medium" className="icons" />
                            </div>
                            <div className="field">
                                <Button text="Login Into Account" onClick={redirectIt} />
                            </div>
                        </div>
                    </div>
                    <div className="sign_up">
                        <h3 className="help">Do Not Have a Account</h3> <Link to="/register" className="sign_up_link">Sign Up</Link>
                    </div>
                </div>
                <div className="login__right">
                    <img src={process.env.PUBLIC_URL + '/assets/headth.gif'} alt="a basic animation" className="right__img" />
                </div>
            </div>
        </div>
        </>
    )
}

export default observer(Login);