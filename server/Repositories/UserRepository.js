let users = [
    {
        id: '0',
        name: 'book',
    },
    {
        id: '1',
        name: 'joon'
    },
]

export default class UserRepository {
    constructor(db) {
        this.db = db;
    }
    async getAllUsers() {
        return await users
    }

    async getUserById(userId) {
        return await users.find(user => user.id == userId);
    }

    async createUser(userData) {
        users.push(userData);
        return await userData;
    }
}