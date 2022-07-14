import express from 'express';
import {DatabaseUtils} from "../database";
import {ChanelController} from "../controllers/chanel";
import {UserController} from "../controllers/user";
import router from "./user";


const routerChanel = express.Router();

routerChanel.get("/getChanelById/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const chanelController = new ChanelController(connection)
    let id = Number(req.params.id);
    const chanel = await chanelController.getChanelById(id)
    if(chanel === null){
        res.status(404).end()
    }else{
        res.json(chanel)
    }

})

routerChanel.get("/getChanelByUserId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const chanelController = new ChanelController(connection)
    let id = Number(req.params.id);
    const chanel = await chanelController.getChanelByUserId(id)
    if(chanel === null){
        res.status(404).end()
    }else{
        res.json(chanel)
    }

})

routerChanel.get("/getAll", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const chanelController = new ChanelController(connection)
    const chanel = await chanelController.getAll()
    if(chanel === null){
        res.status(404).end()
    }else{
        res.json(chanel)
    }

})


routerChanel.post("/createChanel",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const chanelController = new ChanelController(connection);
    const success = await chanelController.createChanel(req.body)
    if(success){
        res.status(200).end()
    }else{
        res.status(404).end()
    }
})

router.delete("/delete/:id",async function(req, res){
    const connection = await DatabaseUtils.getConnection()
    const chanelController = new ChanelController(connection);
    let id = Number(req.params.id);
    const success = await chanelController.removeById(id)
    if(success){
        res.status(204).end()
    }else{
        res.status(404).end()
    }
})
export default routerChanel;