const userDB = require('../db/users.json');

const User = {
    all(){
        return userDB
    },
    find(id){
        return userDB.filter(user => id == user.id )
    },
    findOne(id){
        return userDB.filter(user => id == user.id )[0] || NULL
    },
    update(data, payload) {
        
    },
    delete(id) {
        return userDB.filter(user => user.id !== id)
    }
};

module.exports = User