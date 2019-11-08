const json = require('./positionlist.json')
const db = require('./db.json');
//api/positionlist
module.exports = () => {
  const data = {
    list1: json,
    profile: db.profile
  };
  return data;
}