const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');

const streetRouter = require("./src/routes/street/streetRouter");
const houseRouter = require("./src/routes/house/houseRouter");
const familyRouter = require("./src/routes/family/familyRouter");
const memberRouter = require("./src/routes/member/memberRouter");
// const controller = require("./src/routes/other/controller");

const app = express();
const PORT = 3000;

app.use(
    cors(
        {
            origin: "*",
            credentials:true
        }
    )
)
 
app.use(express.urlencoded({ extended:true }))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

 

app.use("/street",streetRouter)
app.use("/house", houseRouter)
app.use("/member", memberRouter)
app.use("/family", familyRouter)


app.get("/", (req,res) => {
    res.send(`
    Visit <a href="/street" >/street</a> to get all street
    <br> 
    Visit <a href="/street/1" >/street/:id</a> to get street with id 
    <br>
    <br>
    Visit <a href="/house" >/house</a> to get all Houses
    <br>
    Visit <a href="/house/1" >/house/:id</a> to get house with id 
    <br>
    <br>
    Visit <a href="/family" >/family</a> to get all family
    <br>
    Visit <a href="/family/1" >/family/:id</a> to get family with id 
    <br>
    <br>
    Visit <a href="/member" >/member</a> to get all member
    <br>
    Visit <a href="/member/1" >/member/:id</a> to get member with id 
    `)
})

// app.get("/count/male/member", controller.countMaleMembers)
// app.get("/count/male/child", controller.countMaleMembers)
// app.get("/join", controller.joinSpouseMember)
// app.get("/join/child", controller.joinChildMember)

// app.post("/age/member", controller.getMemberFromAgeRange)
// app.post("/age/spouse", controller.getSpouseFromAgeRange)


app.listen(PORT, () => console.log(`listening on PORT ${PORT} `));