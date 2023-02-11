const street_table = `public."street"`;

const getStreets =            `SELECT * FROM ${street_table}`;
const getStreetById =         `SELECT * FROM ${street_table} WHERE id = $1 `;
const checkStreetExistsByName=`SELECT s FROM ${street_table} s WHERE s.name = $1`;
const checkStreetExistsById = `SELECT s FROM ${street_table} s WHERE s.id = $1`;
const addStreet = `INSERT INTO ${street_table} ( name, street_no, ward_no, mark ) VALUES ($1,$2,$3,$4) `;
const deleteStreetById =      `DELETE FROM ${street_table} WHERE id = $1 `;
const updateStreetById = `UPDATE ${street_table} SET name=$2, street_no=$3, ward_no=$4, mark=$5 WHERE id = $1 `;

module.exports = {
    getStreets,
    getStreetById,
    checkStreetExistsByName,
    checkStreetExistsById,
    addStreet,
    deleteStreetById,
    updateStreetById
}

// queries in this File
/*
Create  - one      post      /            Creates new street in DB
Read    - one,all  get       /:id    /    Read a street in DB,Read all streets in DB
Update  - one      put       /:id         Updates a street in DB
Delete  - one      delete    /:id         Deltes a street in DB
*/