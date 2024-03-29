import { config as configDotenv } from "dotenv";
import express from "express";
import loggerMiddleware from './middleware/logger'
import UserRepository from "./Repositories/UserRepository";
import UserController from "./Controllers/UserController";
import UserService from "./Services/UserService";
import path from "path";
import EventRepository from "./Repositories/EventRepository";
import EventController from "./Controllers/EventController";
import EventService from "./Services/EventService";

const app = express();
const dotenv = configDotenv();
const port = 3000;

app.use(loggerMiddleware)
app.use(express.static(path.join(__dirname, "../app/build")));
app.use(express.json({ extended: true }));

const db = 'test';

const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const eventRepository = new EventRepository(db);
const eventService = new EventService(eventRepository);
const eventController = new EventController(eventService)

app.use('/user',userController.router);
app.use('/event',eventController.router);

app.get('/',(req,res)=>{
    res.sendFile(__dirname,'index.html');
})

app.listen(port, () => {
    console.log(`Server on ${port} Port`);
});