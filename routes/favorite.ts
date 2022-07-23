import express from "express";
import routerChanel from "./chanel";
import {DatabaseUtils} from "../database";
import {ChanelController} from "../controllers/chanel";
import {FavoritesController} from "../controllers/favorite";


const routerFavorite = express.Router();

routerFavorite.get("/getFavorisById/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavoritesController(connection)
    let id = Number(req.params.id);
    const favoris = await favorisController.getFavoritesById(id)
    if(favoris === null){
        res.status(404).end()
    }else{
        res.json(favoris)
    }

})

routerFavorite.get("/getfavorisByUserId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavoritesController(connection)
    let id = Number(req.params.id);
    const favoris = await favorisController.getfavoritesByUserId(id)
    if(favoris === null){
        res.status(404).end()
    }else{
        res.json(favoris)
    }

})

routerFavorite.get("/getAll", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavoritesController(connection)
    const favoris = await favorisController.getAll()
    if(favoris === null){
        res.status(404).end()
    }else{
        res.json(favoris)
    }

})


routerFavorite.post("/createFavoris",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavoritesController(connection);
    const success = await favorisController.createFavorite(req.body)
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

routerFavorite.delete("/delete/:id",async function(req, res){
    const connection = await DatabaseUtils.getConnection()
    const favorisController = new FavoritesController(connection);
    let id = Number(req.params.id);
    const success = await favorisController.removeById(id)
    if(success){
        res.status(204).end()
    }else{
        res.status(404).end()
    }
})



export default routerFavorite;