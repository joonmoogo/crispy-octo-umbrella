import express from 'express';
const router = express.Router();

export default class UserController {
    constructor(service) {
        this.service = service;
        this.router = router;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.getAllUsers.bind(this));
        this.router.get('/:id', this.getUserById.bind(this));
        this.router.post('/', this.createUser.bind(this));
    }

    async getAllUsers(req, res, next) {
        try {
            const users = await this.service.getAllUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
    // localhost:3000/user

    async getUserById(req, res, next) {
        try {
            const userId = req.params.id;
            const user = await this.service.getUserById(userId);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
    // localhost:3000/user/0

    async createUser(req, res, next) {
        try {
            const userData = req.query;
            console.log(userData);
            const newUser = await this.service.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
    // localhost:3000/user/0?id=3&name=mook

}