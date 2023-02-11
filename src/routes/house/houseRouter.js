const express = require("express");
const controller = require("./houseController")
const router = express.Router();

//  All Routes Start with     /house
router.route("/")
    .post(controller.addHouse)
    .get(controller.fetchHouses)
 
router.route("/:id")
    .get(controller.fetchHouseById) 
    .delete(controller.deleteHouseById)
    .put(controller.updateHouseById)


module.exports = router;


// Routes in this File
/*
Create  - one      post      /            Creates new house in DB
Read    - one,all  get       /:id    /    Read a house in DB,Read all houses in DB
Update  - one      put       /:id         Updates a house in DB
Delete  - one      delete    /:id         Deltes a house in DB
*/