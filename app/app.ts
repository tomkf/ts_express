// app/app.ts
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Routes } from "./routes";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config(); 
        this.routePrv.routes(this.app); 
        this.mongoSetup();
    }

    //instructions to register to DB
    private mongoSetup(): void{
        mongoose.connect('mongodb://localhost:27017/school', {})
        .then(() => console.log('connection to database successful'))
        .catch((err) => console.error(err));
    }

    private config(): void{

        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");         
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");         
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });           

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;