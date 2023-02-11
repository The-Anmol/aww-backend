const family_table = `family`;

const getFamlies = `SELECT * FROM ${family_table} `;
const getFamilyById = `SELECT * FROM ${family_table} WHERE id = $1 `;
const checkFamilyExistsByNo = `SELECT s FROM ${family_table} s WHERE s.house_id = $1`;
const checkFamilyExistsById = `SELECT s FROM ${family_table} s WHERE s.id = $1`;
const addFamily = `INSERT INTO ${family_table} (house_id,street_id) VALUES ($1,$2) `;
const deleteFamilyById = `DELETE FROM ${family_table} WHERE id = $1 `;
const updateFamilyById = `UPDATE ${family_table} SET house_id=$2,street_id=$3 WHERE id = $1 `;

module.exports = {
    getFamlies,
    getFamilyById,
    checkFamilyExistsByNo,
    checkFamilyExistsById,
    addFamily,
    deleteFamilyById,
    updateFamilyById
}

// queries in this File
/*
Create  - one      post      /            Creates new street in DB
Read    - one,all  get       /:id    /    Read a street in DB,Read all Familys in DB
Update  - one      put       /:id         Updates a street in DB
Delete  - one      delete    /:id         Deltes a street in DB
*/