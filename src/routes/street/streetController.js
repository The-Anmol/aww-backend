const pool = require("../../database/db")
const queries = require("./streetQueries")

const fetchStreets = (req,res) => { 
    pool.query(queries.getStreets, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const fetchStreetById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStreetById,[id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const addStreet = (req, res) => {
    // const { name } = req.body;
    // check if street already exists
    // pool.query(queries.checkStreetExistsByName,[name], (error, results) => {
    //     if (error) throw error;
    //     if (results.rows.length) res.send("Street Already Exists");
    //     else {
    // "name, street_no, ward_no, mark"
    const { name, street_no, ward_no, mark } = req.body;
    pool.query(queries.addStreet, [ name, street_no, ward_no, mark ], (error, results) => {
                if (error) throw error;
                else res.status(201).send("Added Street Successfully") 
            })
    //     }
    // })
    
}
const deleteStreetById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.checkStreetExistsById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) { 
            pool.query( queries.deleteStreetById ,[id], (error, results) => {
                if (error) throw error
                res.send("Deleted Street Successfully")
            })
        }
        else res.send("Street doesn't Exist")
    })
}
const updateStreetById = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, street_no, ward_no, mark } = req.body;
    console.log(id, name, street_no, ward_no, mark)
    pool.query(queries.updateStreetById, [ id, name, street_no, ward_no, mark ], (error, results) => {
        if (error) throw error
        res.send("Updated Street Sucessfully")
    })
}

module.exports = {
    fetchStreets,
    fetchStreetById,
    addStreet,
    deleteStreetById,
    updateStreetById
}