const pool = require("../../database/db")
const queries = require("./memberQueries")


// const member_columns = `name, dob, gender, aadhaar, mobile, pension, pension_type, disability, disability_type, disability_proof, category, injections, corona_vaccine, corona_vaccine_dose_type, father, mother , head, family_id`;

const fetchMembers = (req,res) => { 
    pool.query(queries.getMembers, (error, results) => {
        if (error) throw error
        res.json(results.rows)
    })
}

const conutAllMembers = (req, res) => {
    pool.query(queries.conutAllMembers, (error, results) => {
        if (error) throw error;
        res.json(results.rows)
    })
}

const fetchMemberById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMemberById,[id], (error, results) => {
        if (error) throw error
        res.json(results.rows)
    })
}

const addMember = (req, res) => {
    // // check if Member already exists
    const { name, aadhaar } = req.body;
    pool.query(queries.checkMemberExists,[name,aadhaar], (error, results) => {
        if (error) throw error;
        if (results.rows.length) res.send("Member Already Exists");
        else {
            const { name, dob, gender, aadhaar, mobile, category, pension, pension_type, disability, disability_type, disability_proof, corona_vaccine, corona_vaccine_type, corona_vaccine_dose, family_id, mother, father, head, injections, house_id, street_id, spouse } = req.body;
            pool.query(queries.addMember, [ name, dob, gender, aadhaar, mobile, category, pension, pension_type, disability, disability_type, disability_proof, corona_vaccine, corona_vaccine_type, corona_vaccine_dose, family_id, mother, father, head, injections, house_id, street_id, spouse ], (error, results) => {
                if (error) throw error;
                else res.send("Added Member Successfully") 
            })
        }})
}

const deleteMemberById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.checkMemberExistsById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) { 
            pool.query( queries.deleteMemberById ,[id], (error, results) => {
                if (error) throw error
                res.send("Member Deleted Successfully");
            })
        }
        else res.send("Member doesn't Exist")
    })
}


const updateMemberById = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, dob, gender, aadhaar, mobile, category, pension, pension_type, disability, disability_type, disability_proof, corona_vaccine, corona_vaccine_type, corona_vaccine_dose, family_id, mother, father, head, injections, house_id, street_id, spouse } = req.body;
    pool.query(queries.updateMemberById, [ id, name, dob, gender, aadhaar, mobile, category, pension, pension_type, disability, disability_type, disability_proof, corona_vaccine, corona_vaccine_type, corona_vaccine_dose, family_id, mother, father, head, injections, house_id, street_id, spouse ], (error, results) => {
        if (error) throw error
        res.send("Update Member Sucessfully")
    })
}

module.exports = {
    fetchMembers,
    fetchMemberById,
    addMember,
    deleteMemberById,
    updateMemberById,
}

