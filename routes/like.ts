import express from "express";
import {DatabaseUtils} from "../database";
import {LikeController} from "../controllers/like";

const routerLike = express.Router();

routerLike.get("/getLikeByCommentId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const likeController = new LikeController(connection)
    let id = Number(req.params.id);
    const like = await likeController.getLikeByCommentId(id)
    if(like === null){
        res.status(404).end()
    }else{
        res.json(like)
    }

})

routerLike.get("/getLikeByUserId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const likeController = new LikeController(connection)
    let id = Number(req.params.id);
    const like = await likeController.getLikeByUserId(id)
    if(like === null){
        res.status(404).end()
    }else{
        res.json(like)
    }

})

routerLike.get("/getAll", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const likeController = new LikeController(connection)
    const like = await likeController.getAll()
    if(like === null){
        res.status(404).end()
    }else{
        res.json(like)
    }

})


routerLike.post("/createLike",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const likeController = new LikeController(connection);
    const success = await likeController.createLike(req.body)
    if(success){
        res.status(200).end()
    }else{
        res.status(404).end()
    }
})

routerLike.delete("/delete/:id",async function(req, res){
    const connection = await DatabaseUtils.getConnection()
    const likeController = new LikeController(connection);
    let id = Number(req.params.id);
    const success = await likeController.removeById(id)
    if(success){
        res.status(204).end()
    }else{
        res.status(404).end()
    }
})


export default routerLike;