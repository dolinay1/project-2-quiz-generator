// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {

    adminID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    adminUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    activeUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middleInitial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  User.associate = function (models) {
    // Associating User with Quizzes
    // When an Author is deleted, also delete any associated results
    
    User.hasMany(models.Quizzes, {
      onDelete: "cascade"

    });
    User.hasMany(models.Results, {
      onDelete: "cascade"
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      URLSearchParams.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
