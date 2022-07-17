// These are the configurations for connecting to the database

module.exports = {
    HOST: "localhost",
    USER: "INSERT USERNAME",
    PASSWORD: "INSERT PASSWORD",
    DB: "INSERT DB",
    dialect: "INSERT TYPE OF DB",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };