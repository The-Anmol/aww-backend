const member_table = `member`;

const member_columns = ` name,dob,gender,aadhaar,mobile,category,pension,pension_type,disability,disability_type,disability_proof,corona_vaccine,corona_vaccine_type,corona_vaccine_dose,family_id,mother,father,head,injections,house_id,street_id,spouse`;


const getMembers = `SELECT * FROM ${member_table} INNER JOIN family ON ${member_table}.family_id = family.id`;
// const getMembers = `SELECT * FROM ${member_table} ORDER BY family_id  `;
const getMemberById = `SELECT * FROM ${member_table} WHERE id = $1 `;
const checkMemberExists = `SELECT s FROM ${member_table} s WHERE s.name = $1 AND s.aadhaar = $2`;
const checkMemberExistsById = `SELECT s FROM ${member_table} s WHERE s.id = $1`;
const addMember = `INSERT INTO ${member_table} (${member_columns}) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)`;
const updateMemberById = `UPDATE ${member_table} SET name=$2, dob=$3, gender=$4, aadhaar=$5, mobile=$6, category=$7, pension=$8, pension_type=$9, disability=$10, disability_type=$11, disability_proof=$12, corona_vaccine=$13, corona_vaccine_type=$14, corona_vaccine_dose=$15, family_id=$16, mother=$17, father=$18, head=$19, injections=$20, house_id=$21, street_id=$22, spouse=$23  WHERE id = $1 `;
const deleteMemberById = `DELETE FROM ${member_table} WHERE id = $1 `;

// name,dob,gender,mobile,aadhaar,pension,pension_type,disblitity,disblitity_type,spouse,children,mother_name,father_name,category,injections,house_id

module.exports = {
    getMembers,
    getMemberById,
    checkMemberExists,
    checkMemberExistsById,
    addMember,
    updateMemberById,
    deleteMemberById,
}

