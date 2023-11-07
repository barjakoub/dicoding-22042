const cloud_sql = require('mysql');

const connection = cloud_sql.createConnection({
  host: `34.101.73.150`,
  user: `local`,
  password: `localtest`
});

module.exports = connection;