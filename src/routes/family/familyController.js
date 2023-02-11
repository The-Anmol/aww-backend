const pool = require("../../database/db")
const queries = require("./familyQueries")

const fetchFamilies = (req, res) => {
    pool.query(queries.getFamlies, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const fetchFamilyById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getFamilyById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const addFamily = (req, res) => {
    const { house_id, street_id } = req.body;
    pool.query(queries.addFamily, [house_id, street_id], (error, results) => {
        if (error) throw error;
        else res.status(201).send("Added Family Successfully")
    })
}

const deleteFamilyById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.checkFamilyExistsById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const id = parseInt(req.params.id);
            pool.query(queries.deleteFamilyById, [id], (error, results) => {
                if (error) throw error
                res.status(200).send("Family Deleted Successfully").json(results.rows)
            })
        }
        else res.send("Family doesn't Exist")
    })
}

const updateFamilyById = (req, res) => {
    const id = parseInt(req.params.id);
    const { house_id, street_id } = req.body;
    pool.query(queries.updateFamilyById, [id, house_id, street_id], (error, results) => {
        if (error) throw error
        res.status(200).send("Update Member Sucessfully")
    })
}

module.exports = {
    fetchFamilies,
    fetchFamilyById,
    addFamily,
    deleteFamilyById,
    updateFamilyById
}

