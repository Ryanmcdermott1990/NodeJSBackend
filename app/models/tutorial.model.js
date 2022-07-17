module.exports = (sequelize, Sequelize) => {
    const tasks = sequelize.define("task", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      desc: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return tasks;
  };