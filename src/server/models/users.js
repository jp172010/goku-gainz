module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          models.User.hasMany(models.Exercises);
          models.User.hasMany(models.Workouts);
        }
      }
    }
  );
  return User;
};
