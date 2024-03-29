import express from 'express';
const router = express.Router();

export default class EventController {
    constructor(service) {
        this.service = service;
        this.router = router;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.getAllEvents.bind(this));
        this.router.get('/:id', this.getEventById.bind(this));
        this.router.get('/user/:id', this.getEventByUserId.bind(this));
        this.router.post('/', this.createEvent.bind(this));
        this.router.put('/:id', this.updateEvent.bind(this));
    }

    async getAllEvents(req, res, next) {
        try {
            const events = await this.service.getAllEvents();
            res.json(events);
        } catch (error) {
            next(error);
        }
    }

    // localhost:3000/event

    async getEventById(req, res, next) {
        try {
            const eventId = req.params.id;
            const event = await this.service.getEventById(eventId);
            res.json(event);
        } catch (error) {
            next(error);
        }
    }
    // localhost:3000/user/0

    async createEvent(req, res, next) {
        try {
            const userData = req.query;
            const newEvent = await this.service.createUser(userData);
            res.status(201).json(newEvent);
        } catch (error) {
            next(error);
        }
    }

    async updateEvent(req, res, next) {
        try {
            const eventId = req.params.id;
            const userData = req.query;
            const event = await this.service.updateEvent(eventId, userData);
            res.json(event);
        } catch (error) {
            next(error);
        }
    }

    async deleteEvent(req, res, next) {
        try {
            const eventId = req.params.id;
            const event = await this.service.deleteEvent(eventId);
            res.json(event);
        } catch (error) {
            next(error);
        }
    }

    async getEventByUserId(req, res, next) {
        try {
            const userId = req.params.id;
            const event = await this.service.getEventByUserId(userId);
            res.json(event);
        } catch (error) {
            next(error);
        }
    }

    async getEventByCoordinate(req,res,next){
        try{
            const coordinate = req.query;
            const event = await this.service.getEventByCoordinate(coordinate);
            res.json(event);
        }catch(error){
            next(error);
        }
    }
}