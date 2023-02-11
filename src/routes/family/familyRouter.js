const express = require("express");
const controller = require("./familyController")
const router = express.Router();

//  All Routes Start with     /house


router.route("/")
    .post(controller.addFamily)
    .get(controller.fetchFamilies)
 
router.route("/:id")
    .get(controller.fetchFamilyById) 
    .delete(controller.deleteFamilyById)
    .put(controller.updateFamilyById)


module.exports = router;


// Routes in this File
/*
Create  - one      post      /            Creates new house in DB
Read    - one,all  get       /:id    /    Read a house in DB,Read all houses in DB
Update  - one      put       /:id         Updates a house in DB
Delete  - one      delete    /:id         Deltes a house in DB
*/