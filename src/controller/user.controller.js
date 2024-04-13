import UserModel from "../model/user.model.js";

export default class UserController{
    getHomePage(req, res){
        res.render("home");
    }

    getRegisterPage(req, res){
        res.render('register', {errorMsg:null});
    }

    getLoginPage(req, res){
        res.render("login", {errorMsg:null});
    }

    handleRegistration(req, res){
        const {name, email, password} = req.body;
        const result = UserModel.addUser({
            id:new Date().toISOString(),
            name, 
            email, 
            password
        });
        if(result){
            res.redirect('/login');
        } else {
            res.render("register", {errorMsg:"Invalid Credentials"});
        }
    }
    
    handleLogin(req, res){
        const {usertype, email, password} = req.body;
        const result = UserModel.loginUser({usertype, email, password});
        if(result){
            res.redirect('/jobs');
        } else {
            res.render("login", {errorMsg:"User does not exist."})
        }
    }
    
    handleLogout(){}    
}

