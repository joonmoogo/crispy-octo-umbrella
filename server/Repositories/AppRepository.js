const users=[
    {
        id:'1',
        name:'joon'
    },
]

export default class AppRepository{
    constructor(db){
        this.db = db;
    }

    getAllUser(){
        return users;
    }
}