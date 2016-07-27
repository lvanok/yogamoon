// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// // Dependencies
var Sequelize = require("sequelize");
// Lists out connection options
var source = {
    localhost: {
        host: 'localhost',
        user: 'root',
        password: "",
        database: "yoga"
    },
    //fill out from jawsdb
      jawsDB: {
      host: '   g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'qi1z4xvr9qqs9fsc',
      password: 'if4hofou9v8fxlbv',
      database: 'yoga',
      port: '3306'
    }
}
// Selects a connection (can be changed quickly as needed)
var port = require("../server.js");
if (port==3000) {
  var selectedSource = localhost;
}else{
var selectedSource = source.jawsDB;
}
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  define: { timestamps: false },
  host: selectedSource.host,
  dialect: 'mysql',
  port: selectedSource.port,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

// Exports the connection for other files to use
module.exports = sequelize;


