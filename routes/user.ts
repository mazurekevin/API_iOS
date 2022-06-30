import express from 'express';
import {DatabaseUtils} from "../database";
import {UserController} from "../controllers/user";
import {LoginController} from "../controllers/login";



const router = express.Router();


router.get("/getByName/:name", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const userController = new UserController(connection)
    const user = await userController.getByName(req.params.name)
    if(user === null){
        res.status(404).end()
    }else{
        res.json(user)
    }

})



router.get("/getById/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const userController = new UserController(connection)
    const user = await userController.getById(req.params.id)
    if(user === null){
        res.status(404).end()
    }else{
        res.json(user)
    }

})


router.delete("/delete/:id",async function(req, res){
    const connection = await DatabaseUtils.getConnection()
    const userController = new UserController(connection);
    const success = await userController.removeById(req.params.id)
    if(success){
        res.status(204).end()
    }else{
        res.status(404).end()
    }
})

router.post("/createUser",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const userController = new UserController(connection);
    const success = await userController.createUser(req.body)
    if(success){
        res.status(200).end()
    }else{
        res.status(404).end()
    }
})

router.post("/checkLogin", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const loginController = new LoginController(connection)
    const login = req.body
    const user = await loginController.getByMail(req.body)
    if(user === null){
        res.status(404).end()
    }else if (user.password!=login.password) {
        res.status(401).end()
    }else{
        res.json(user)
    }

})
export default router;