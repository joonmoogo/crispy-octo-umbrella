import express from 'express';
const router = express.Router();

export default class AppController{
    constructor(appService){
        this.appService = appService;
        this.router = router;
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.get('/',(req,res)=>{
            res.json(this.appService.getAllUser());
        })

        this.router.get('/home',(req,res)=>{
            res.json(this.appService.getAllUser());
        })
    }
}