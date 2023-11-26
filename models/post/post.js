const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const post = sequelize.define("post", {
    post_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
    background: {
      type: DataTypes.STRING,
    },
    likeCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      laughCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      loveCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      angryCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Default value will be the current date/time
      },

      time: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        get() {
          const rawValue = this.getDataValue('timeField');
          // Check if rawValue exists and return formatted time or null
          return rawValue ? new Date(rawValue).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : null;
        },
        set(value) {
          // You can handle the input time format here if needed before setting it to the database
          this.setDataValue('timeField', value);
        },
      },
  });

  return post;
};
