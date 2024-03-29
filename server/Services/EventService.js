export default class EventService {
    constructor(repository) {
        this.repository = repository;
    }

    async getAllEvents() {
        const events = await this.repository.getAllEvents(); 
        if(!events){
            throw new Error('no events');
        }
    }

    async getEventById(eventId) {
        return await this.repository.getEventById(eventId);
    }

    async createEvent(userData) {
        return await this.repository.createEvent(userData);
    }

    async updateEvent(eventId,userData){
        return await this.repository.updateEvent(eventId,userData);
    }

    async deleteEvent(eventId){
        return await this.repository.deleteEvent(eventId);
    }

    async getEventByUserId(userId){
        return await this.repository.getEventByUserId(userId);
    }

    async getEventByCoordinate(coordinate){
        return await this.repository.getEventByCoordinate(coordinate);
    }
}