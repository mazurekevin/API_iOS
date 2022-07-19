import express from "express";
import router from "./user";
import {DatabaseUtils} from "../database";
import {UserController} from "../controllers/user";
import {UserChanelController} from "../controllers/userChanel";

const routerUserChanel = express.Router();

routerUserChanel.post("/createUserChanel",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const userChanelController = new UserChanelController(connection);
    const success = await userChanelController.createUserChanel(req.body)
    if(success){
        res.status(200).end()
    }else{
        res.status(404).end()
    }
})

routerUserChanel.get("/getByUserId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const userChanelController = new UserChanelController(connection)
    let id = Number(req.params.id);
    const userChanel = await userChanelController.getByUserId(id)
    if(userChanel === null){
        res.status(404).end()
    }else{
        res.json(userChanel)
    }

})

routerUserChanel.get("/getByChanelId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const userChanelController = new UserChanelController(connection)
    let id = Number(req.params.id);
    const userChanel = await userChanelController.getByChanelId(id)
    if(userChanel === null){
        res.status(404).end()
    }else{
        res.json(userChanel)
    }

})






export default routerUserChanel;