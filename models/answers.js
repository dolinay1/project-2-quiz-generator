module.exports = function (sequelize, DataTypes) {
    var Answers = sequelize.define("Answers", {
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correctAnswer: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });

    Answers.associate = function (models) {

        Answers.belongsTo(models.Questions, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Answers;
};