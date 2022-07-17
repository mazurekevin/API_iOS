import express from "express";
import routerChanel from "./chanel";
import {DatabaseUtils} from "../database";
import {ChanelController} from "../controllers/chanel";
import {FavorisController} from "../controllers/favoris";


const routerFavoris = express.Router();

routerFavoris.get("/getFavorisById/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavorisController(connection)
    let id = Number(req.params.id);
    const favoris = await favorisController.getFavorisById(id)
    if(favoris === null){
        res.status(404).end()
    }else{
        res.json(favoris)
    }

})

routerFavoris.get("/getfavorisByUserId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavorisController(connection)
    let id = Number(req.params.id);
    const favoris = await favorisController.getfavorisByUserId(id)
    if(favoris === null){
        res.status(404).end()
    }else{
        res.json(favoris)
    }

})

routerFavoris.get("/getAll", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavorisController(connection)
    const favoris = await favorisController.getAll()
    if(favoris === null){
        res.status(404).end()
    }else{
        res.json(favoris)
    }

})


routerFavoris.post("/createFavoris",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavorisController(connection);
    const success = await favorisController.createFavoris(req.body)
    if(success){
        res.status(200).end()
    }else{
        res.status(404).end()
    }
})

/*routerFavoris.post("/checkFavoris",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavorisController(connection);
    const success = await favorisController.checkFavoris(req.body)
    if(success){
        res.status(200).end()
    }else{
        res.status(404).end()
    }
})*/

routerFavoris.delete("/delete/:id",async function(req, res){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavorisController(connection);
    let id = Number(req.params.id);
    const success = await favorisController.removeById(id)
    if(success){
        res.status(204).end()
    }else{
        res.status(404).end()
    }
})



export default routerFavoris;