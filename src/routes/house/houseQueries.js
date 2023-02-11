const house_table = `house`;

const getHouses =            `SELECT * FROM ${house_table} `;
const getHouseById =         `SELECT * FROM ${house_table} WHERE id = $1 `;
const checkHouseExistsByNo = `SELECT s FROM ${house_table} s WHERE s.house_no = $1`;
const checkHouseExistsById = `SELECT s FROM ${house_table} s WHERE s.id = $1`;
const addHouse = `INSERT INTO ${house_table} (house_no, street_id, mark) VALUES ($1,$2,$3) `;
const deleteHouseById =      `DELETE FROM ${house_table} WHERE id = $1 `; 
const updateHouseById = `UPDATE ${house_table} SET house_no=$2, street_id=$3, mark=$4 WHERE id = $1 `;

// "street_id":"13",
// "mark": "gurudwara",
// "house_no": "1" 

module.exports = {
    getHouses,
    getHouseById,
    checkHouseExistsByNo,
    checkHouseExistsById,
    addHouse,
    deleteHouseById,
    updateHouseById
}

// queries in this File
/*
Create  - one      post      /            Creates new street in DB
Read    - one,all  get       /:id    /    Read a street in DB,Read all Houses in DB
Update  - one      put       /:id         Updates a street in DB
Delete  - one      delete    /:id         Deltes a street in DB
*/

