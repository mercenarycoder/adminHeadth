import { makeObservable, observable, action } from "mobx";
import register from "../components/register/register";
import axios from 'axios';
import {LoginHandler} from '../../MobxState/LogInfo';


class LogInfo {
    logged;
    logData;
    constructor() {
        this.logged = false;
        this.logData = 'noner';
        makeObservable(this, {
            logged: observable,
            logData: observable,
            login: action,
            logout: action,
            callRegister: action,
            loginAsync:action,
            checkLogin: action,
        });
    }
    login(token) {
        this.logData = token;
        this.logged = true;
        localStorage.add("token",token);
    }
    logout() {
        this.logData = null;
        this.logged = false;
        localStorage.remove("token");
    }
    checkLogin(){
        const token=localStorage.getItem("token");
        if(token){
            this.login(token);
        }else{
            console.log('you need to login or register user.');
        }
    }
    async callRegister(fname, lname, document, password, email, account, organization) {
        try {
            const registerData = new FormData();
            registerData.append("fname", fname);
            registerData.append("lname", lname);
            registerData.append("email", email);
            registerData.append("password", password);
            registerData.append("account", account);
            registerData.append("image", document);
            registerData.append("organization", organization);
            console.log(process.env.DYNAMIC_URL);
            const result = await axios.post(
                "http://192.168.1.3:5000/react/register",
                registerData);
            return result.data;
        } catch (error) {
            return error;
        }
    }
    async loginAsync(email, password) {
        try {
            const loginData = new FormData();
            loginData.append("email", email);
            loginData.append("password", password);
            const result = await axios.post(
                "http://192.168.1.3:5000/react/login",
                loginData);
            return result.data;
        } catch (error) {
            return error;
        }
    }
}

export const LoginHandler = new LogInfo();