const express = require("express");
const controller = require("./memberController")
const router = express.Router();

//  All Routes Start with     /street

router.route("/")
    .post(controller.addMember)
    .get(controller.fetchMembers);

router.route("/:id")
    .get(controller.fetchMemberById)
    .delete(controller.deleteMemberById)
    .put(controller.updateMemberById)


module.exports = router;


// Routes in this File
/*
Create  - one      post      /            Creates new street in DB
Read    - one,all  get       /:id    /    Read a street in DB,Read all streets in DB
Update  - one      put       /:id         Updates a street in DB
Delete  - one      delete    /:id         Deltes a street in DB
*/