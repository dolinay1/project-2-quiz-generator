module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Questions.associate = function (models) {

        Questions.belongsTo(models.Quizzes, {
            foreignKey: {
                allowNull: false
            }
        });

        Questions.hasMany(models.Answers, {
            onDelete: "cascade"
        });
    };

    return Questions;
};