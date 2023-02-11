const express = require("express");
const controller = require("./streetController")
const router = express.Router();

//  All Routes Start with /street
router.route("/") 
    .post(controller.addStreet) 
    .get(controller.fetchStreets)

router.route("/:id") 
    .get(controller.fetchStreetById) 
    .put(controller.updateStreetById)
    .delete(controller.deleteStreetById) 

module.exports = router;


// Routes in this File
/*
Create  - one      post      /            Creates new street in DB
Read    - one,all  get       /:id    /    Read a street in DB,Read all streets in DB
Update  - one      put       /:id         Updates a street in DB
Delete  - one      delete    /:id         Deltes a street in DB
*/