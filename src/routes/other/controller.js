const pool = require("../../database/db");
const countQueries = require("./countQueries")

const countAll = (req, res) => {
    pool.query(countQueries.countAll)
}

const countMaleMembers = (req, res) => {
    pool.query(countQueries.countMaleMembers, (error, results) => {
        if (error) throw error;
        res.json(results.rows)
    })
}
// const countMaleChildren = (req, res) => {
//     pool.query(countQueries.countMaleChildren, (error, results) => {
//         if (error) throw error;
//         res.json(results.rows)
//     })
// }
const joinSpouseMember = (req, res) => {
    pool.query(countQueries.joinSpouseMember, (error, results) => {
        if (error) throw error
        res.send(results.rows)
    })
}
const joinChildMember = (req, res) => {
    pool.query(countQueries.joinChildMember, (error, results) => {
        if (error) throw error
        res.send(results.rows)
    })
}
const getMemberFromAgeRange = (req, res) => {
    const { from, to } = req.body;
    pool.query(countQueries.getMemberFromAgeRange, [from, to], (error, results) => {
        if (error) throw error
        res.send(results.rows)
    })
}
const getSpouseFromAgeRange = (req, res) => {
    const { from, to } = req.body;
    pool.query(countQueries.getSpouseFromAgeRange, [from, to], (error, results) => {
        if (error) throw error
        res.send(results.rows)
    })
}




module.exports = {
    countAll,
    countMaleMembers,
    joinSpouseMember,
    joinChildMember,
    getMemberFromAgeRange,
    getSpouseFromAgeRange
}