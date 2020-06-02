CREATE DATABASE quizDB;
USE quizDB;

CREATE TABLE `questions` (
  `questionID` int,
  `quizID` int,
  `question` varchar(250),
  `difficulty` varchar(20),
  `dateCreated` datetime,
  PRIMARY KEY (`questionID`),
  KEY `FK` (`quizID`)
);
CREATE TABLE `quizzes` (
  `quizID` int,
  `userID` int,
  `quizName` varchar(20),
  `category` varchar(20),
  `questionCount` int,
  `ageGroup` int,
  `dateCreated` datetime,
  PRIMARY KEY (`quizID`),
  KEY `FK` (`userID`)
);
CREATE TABLE `answers` (
  `answerID` int,
  `questionID` int,
  `answer` varchar(250),
  `correctAnswer` boolean,
  `dateCreated` datetime,
  PRIMARY KEY (`answerID`),
  KEY `FK` (`questionID`)
);
CREATE TABLE `results` (
  `resultID` int,
  `userID` int,
  `quizID` int,
  `questionsCorrect` int,
  `score` int,
  `dateCreated` datetime,
  PRIMARY KEY (`resultID`),
  KEY `FK` (`userID`, `quizID`)
);
CREATE TABLE `users` (
  `userID` int,
  `adminID` int,
  `adminUser` boolean,
  `activeUser` boolean,
  `userName` varchar(20),
  `passWord` varchar(20),
  `firstName` varchar(20),
  `lastName` varchar(20),
  `middleInitial` varchar(5),
  `city` varchar(20),
  `state` varchar(20),
  `photo` blob,
  `dateCreated` datetime,
  PRIMARY KEY (`userID`),
  KEY `FK` (`adminID`)
);