module.exports = function (sequelize, DataTypes) {
    var Quizzes = sequelize.define("Quizzes", {
        // quizID: {
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
        quizName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cateory: {
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