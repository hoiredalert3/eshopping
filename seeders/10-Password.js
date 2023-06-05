"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const models = require("../models")
    const bcrypt = require("bcrypt")

    //update hash password
    const users = await models.User.findAll()
    let updatedUsers = []
    users.forEach((user) => {
      updatedUsers.push({
        id: user.id,
        password: bcrypt.hashSync("demo@123", 8),
      })
    })
    await models.User.bulkCreate(updatedUsers, {
      updateOnDuplicate: ["password"],
    })
  },

  async down(queryInterface, Sequelize) {},
}
