import { makeObservable,observable,action } from "mobx";

class LogInfo{
    logged;
    logData;
    constructor(){
        this.logged=false;
        this.logData='noner';
        makeObservable(this,{
            logged:observable,
            logData:observable,
            login:action,
            logout:action,
            callRegister:action
        });
    }
    login(token){
        this.logData=token;
        this.logged=true;
    }
    logout(){
        this.logData=null;
        this.logged=false;
    }
    callRegister(fname,lname,document,password,email){

    }
}

export const LoginHandler=new LogInfo();