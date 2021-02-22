const express = require('express');
const router = express.Router();
const faker = require('faker')
const { uuid } = require('uuidv4')

var idx = 1;

const createUser = () => {
    return {
        id: idx++,
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        country: faker.address.country(),
      
    };
};

const createUsers = (numUsers) => {
    idx=1
    return Array.from({length: numUsers}, createUser);
}

router.get('/', async (req, res)=> {
    res.send(createUsers(10))
})

module.exports=router