const pool = require("../../database/db")
const queries = require("./houseQueries")
  
const fetchHouses = (req,res) => { 
    pool.query(queries.getHouses, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const fetchHouseById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.checkHouseExistsById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            pool.query(queries.getHouseById, [id], (error, results) => {
                if (error) throw error
                res.status(200).json(results.rows)
            })
        }
        else res.send("House doesnt Exists")
    })
}

// {
//     "street_id": "13",
//         "mark": "gurudwara",
//             "house_no": "1"
// }

const addHouse = (req, res) => {
    const { house_no } = req.body;
    pool.query(queries.checkHouseExistsByNo, [ house_no ], (error, results) => {
        if (error) throw error;
        if (results.rows.length) res.send("House Already Exists");
        else { 
            const { house_no, street_id, mark } = req.body;
            pool.query(queries.addHouse, [ house_no, street_id, mark ], (error, results) => {
                if (error) throw error;
                res.status(201).send("House Added Sucessfully")
            })
        }})
}

const deleteHouseById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.checkHouseExistsById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) { 
            pool.query(queries.deleteHouseById, [id], (error, results) => {
                if (error) throw error
                res.send("House Deleted Successfully");
            })
        }
        else res.send("House doesn't Exist")
    })
}


const updateHouseById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.checkHouseExistsById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const { house_no, street_id, mark } = req.body;
            pool.query(queries.updateHouseById, [ id, house_no, street_id, mark ], (error, results) => {
                if (error) throw error
                res.status(200).send("House Updated Successfully");
            })
        }
        else res.send("House doesn't Exist")
    })
}

module.exports = {
    fetchHouses,
    fetchHouseById,
    addHouse,
    deleteHouseById,
    updateHouseById
}

