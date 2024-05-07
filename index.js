const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Set EJS as templating engine
app.set("view engine", "ejs");

// Function to serve all static files
// inside public directory.
app.use(express.static("public"));
app.use("/public", express.static("public"));

// Initialize a variable to store the message
let storedMessage = 'Initial text';

app.get("/", (req, res) => {
  let data = {
    name: "Akashdeep",
    hobbies: ["playing football", "playing chess", "cycling"],
  };

  res.render("home", { data: data });
});

app.get("/home", (req, res) => {
  let data = {
    name: "Akashdeep",
    hobbies: ["playing football", "playing chess", "cycling"],
  };

  res.render("home", { data: data });
});

app.get("/daily-page", (req, res) => {
  // Get the current date
  var currentDate = new Date();

  // Array of day names
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array of month names
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  var dayOfWeekIndex = currentDate.getDay();

  // Get the day of the month
  var dayOfMonth = currentDate.getDate();

  // Get the month (0 = January, 1 = February, ..., 11 = December)
  var monthIndex = currentDate.getMonth();

  // Get the year
  var year = currentDate.getFullYear();

  // Format the date as "DDDD, dd MMMM yyyy"
  var formattedDate =
    daysOfWeek[dayOfWeekIndex] +
    ", " +
    (dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth) +
    " " +
    months[monthIndex] +
    " " +
    year;

  let data = {
    date: formattedDate,
  };

  res.render("daily-page", { data: data, message: storedMessage });
});

// Route handler for form submission
app.post("/submit", (req, res) => {
	storedMessage = req.body.message; // Update the stored message
  // Do something with the submitted message
  console.log("Submitted message:", storedMessage);
});

app.get("/history", (req, res) => {
  let data = {
    name: "Akashdeep",
    hobbies: ["playing football", "playing chess", "cycling"],
  };

  res.render("history", { data: data });
});

app.get("/page", (req, res) => {
  let data = {
    name: "Akashdeep",
    hobbies: ["playing football", "playing chess", "cycling"],
  };

  res.render("page", { data: data });
});

app.get("/search", (req, res) => {
  let data = {
    name: "Akashdeep",
    hobbies: ["playing football", "playing chess", "cycling"],
  };

  res.render("search", { data: data });
});

app.get("/about", (req, res) => {
  let data = {
    name: "Akashdeep",
    hobbies: ["playing football", "playing chess", "cycling"],
  };

  res.render("about", { data: data });
});

const server = app.listen(4000, function () {
  console.log("listening to port 4000");
});
