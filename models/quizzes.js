module.exports = function (sequelize, DataTypes) {
    var Quizzes = sequelize.define("Quizzes", {
        quizName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        questionCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Quizzes.associate = function (models) {

        Quizzes.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Quizzes.hasMany(models.Questions, {
            onDelete: "cascade"
        });
    };

    return Quizzes;
};