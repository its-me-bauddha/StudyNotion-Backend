const CrudRepository = require("./Crud-repository");
const User = require('../models/User');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = UserRepository;