module.exports = function (sequelize, DataTypes) {
    var Results = sequelize.define("Results", {
        questionsCorrect: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Results.associate = function (models) {

        Results.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Results.belongsTo(models.Quizzes, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Results;
};