module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        // questionID: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false
        // },
        // quizID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: "quizzes",
        //         key: "quizID"
        //     }
        // },
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