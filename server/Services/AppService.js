export default class AppService{
    constructor(repository){
        this.repository = repository;
    }

    getAllUser(){
        return this.repository.getAllUser();
    }
}