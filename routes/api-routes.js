// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id,
      adminUser: req.user.adminUser
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      adminID: req.body.adminID,
      adminUser: req.body.adminUser,
      activeUser: req.body.activeUser,
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleInitial: req.body.middleInitial,
      city: req.body.city,
      state: req.body.state
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for creating a quiz:
  app.post("/api/createQuiz", (req, res) => {
    console.log(req.body)
    const newQuiz = req.body
    const quiz = db.Quizzes.create({
      quizName: newQuiz.quizName,
      category: newQuiz.category,
      questionCount: newQuiz.questionCount,
      UserId: req.user.id
      // first you create the qui
      /// loop the object 
      // then you create the row for the first question 
      // then you create the row for the answers realted with this question
    })
      .then((dbQuiz) => {
        ///  create question .then(dbquestion) add the id from the quizz
        console.log(`this is ${dbQuiz.id}`)
        for (i = 1; i < 4; i++) {
          db.Questions.create({
            QuizId: dbQuiz.id,
            question: newQuiz["question" + i].question
          })
        }
        /// create answers add the ide from the queston 
      }).then((dbQuestions))
      .catch(err => {
        console.error(err);
        res.status(401).json(err);
      });
  })


  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's username and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id,
        adminUser: req.user.adminUser
      });
      console.log(req.user.adminUser)
    }
  });


};

