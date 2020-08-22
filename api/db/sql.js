var sql = require("mssql");

var config = {
  server: "(LocalDB)MSSQLLocalDB",
  database: "TestDB",
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

function request(query) {
  return new Promise((resolve, reject) => {
    new sql.ConnectionPool(config)
      .connect()
      .then((pool) => {
        return pool.request().query(query);
      })
      .then((result) => {
        sql.close();
        resolve(result.recordsets);
      })
      .catch((err) => {
        sql.close();
        reject(err);
      });
  });
}
module.exports.request = request;
