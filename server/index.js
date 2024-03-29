import { config as configDotenv } from "dotenv";
import express from "express";
import loggerMiddleware from './middleware/logger'
import AppController from "./Controllers/AppController";
import AppService from "./Services/AppService";
import AppRepository from "./Repositories/AppRepository";

const app = express();
const dotenv = configDotenv();
const router = express.Router();
app.use(loggerMiddleware)

const db = 'test';
const appRepository = new AppRepository(db);
const appService = new AppService(appRepository);
const appController = new AppController(appService);

app.use('/',appController.router);

app.listen(3000, () => {
    console.log(`Server on ${3000} Port`);
});




