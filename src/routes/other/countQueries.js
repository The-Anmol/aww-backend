
const countMembers = `SELECT COUNT(*) FROM member`;
const countSpouses = `SELECT COUNT(*) FROM spouse `;
const countChildren = `SELECT COUNT(*) FROM child `;


const countMaleMembers = `SELECT COUNT(*) FROM member WHERE member.gender = 'male' `;
const countFemaleMembers = `SELECT COUNT(*) FROM member WHERE member.gender = 'female' `;

const countMaleSpouse = `SELECT COUNT(*) FROM spouse WHERE spouse.gender = 'male' `;
const countFemaleSpouse = `SELECT COUNT(*) FROM spouse WHERE spouse.gender = 'female' `;

const joinSpouseMember = `SELECT * FROM spouse RIGHT JOIN member ON spouse.spouse = member.id`
const joinChildMember = `SELECT m FROM member m JOIN member ON m.father = member.id`

const getMemberFromAgeRange = `SELECT * FROM member WHERE dob BETWEEN $1 AND $2;`
const getSpouseFromAgeRange = `SELECT * FROM spouse WHERE spouse_dob BETWEEN $1 AND $2;`


module.exports = {
    countMembers,
    countSpouses,
    countChildren,
    countMaleMembers,
    joinSpouseMember,
    joinChildMember,
    getMemberFromAgeRange,
    getSpouseFromAgeRange

}