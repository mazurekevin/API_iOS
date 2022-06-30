import express from "express";
import {DatabaseUtils} from "../database";
import {LoginController} from "../controllers/login";

//const router = express.Router();

/*router.post("/checkLogin", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const loginController = new LoginController(connection)
    const login = req.body
    const user = await loginController.getByMail(req.body)
    if(user === null  || user.password!=login.password){
        res.status(404).end()
    }else{
        res.json(user)
    }

})*/