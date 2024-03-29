export default class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAllUsers() {
    return await this.repository.getAllUsers();
  }

  async getUserById(userId) {
    return await this.repository.getUserById(userId);
  }

  async createUser(userData) {
    return await this.repository.createUser(userData);
  }
}