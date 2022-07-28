const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

//set up routes
app.get("/test", (req, res) => {
  res.send("Wow, its actually worked");
});

app.get("/another-one", (req, res) => {
  res.send("this one works, too!");
});

app.delete("delete-one", (req, res) => {
  Array.splice(3, 5);
});

exports.api = functions.https.onRequest(app); // any response coming in is being sent to express

exports.helloThere = functions.https.onRequest((req, res) => {
  res.send("Hey girl, it's your first Firebase!");
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
