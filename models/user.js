"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcrypt");
const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usertype: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    confirmPassword: {
      type: DataTypes.VIRTUAL,
      set(value) {
        if (value === this.password) {
          const hashedPassword = bcrypt.hashSync(value, 10);
          this.setDataValue("password", hashedPassword);
        } else {
          throw new console.error("passwords do not match");
        }
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    tableName: "users",
  }
);

module.exports = User;
