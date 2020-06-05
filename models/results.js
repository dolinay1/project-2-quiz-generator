module.exports = function (sequelize, DataTypes) {
    var Results = sequelize.define("Results", {
        // resultID: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false
        // },
        // userID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: "user",
        //         key: "userID"
        //     }
        // },
        // quizID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: "quizzes",
        //         key: "quizID"
        //     }
        // },
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