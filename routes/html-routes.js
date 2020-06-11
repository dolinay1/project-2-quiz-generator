// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      //need to add logic to redirect users to correct dashboard
      res.render("login");
    }

    res.render("login");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      //need to add logic to redirect users to correct dashboard
      res.redirect("login");
    }
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup")
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/adminDashboard", isAuthenticated, (req, res) => {
    res.render("adminDashboard")
  })

  app.get("/userDashboard", isAuthenticated, (req, res) => {
    res.render("userDashboard")
  })

  app.get("/createQuiz", isAuthenticated, (req, res) => {
    res.render("createQuiz");
  })
};
