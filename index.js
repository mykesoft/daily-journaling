const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const app = express();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dailyjournaling",
  password: "123456",
  port: 5432,
});

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to month since January is 0
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCurrentDateLong() {
  var currentDate = new Date();
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  var dayOfWeekIndex = currentDate.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  var dayOfMonth = currentDate.getDate(); // Get the day of the month
  var monthIndex = currentDate.getMonth(); // Get the month (0 = January, 1 = February, ..., 11 = December)
  var year = currentDate.getFullYear(); // Get the year

  // Format the date as "DDDD, dd MMMM yyyy"
  return (formattedDate =
    daysOfWeek[dayOfWeekIndex] +
    ", " +
    (dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth) +
    " " +
    months[monthIndex] +
    " " +
    year);
}

async function getMessageContent(publicationDate) {
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL database");

    const result = await client.query(
      "SELECT content FROM messages WHERE publication_date=$1",
      [publicationDate]
    );
    console.log(`Result: ${JSON.stringify(result.rows)}`);
    const storedMessage = result.rows[0] ? result.rows[0].content : "";

    await client.release();
    return storedMessage;
  } catch (error) {
    console.error("Error retrieving message:", error.message);
    return "";
  }
}

async function upsertRow(pageContent) {
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL database");

    const publicationDate = getCurrentDate();
    // Construct the query to upsert a row
    const query = `
        INSERT INTO messages (publication_date, content)
        VALUES ($1, $2)
        ON CONFLICT (publication_date)
        DO UPDATE SET content = $2
        RETURNING *;
      `;
    console.log(`PageContent is: ${pageContent}`);
    const result = await client.query(query, [publicationDate, pageContent]);

    if (result.rows.length > 0) {
      console.log("Row inserted or updated successfully:", result.rows[0]);
    } else {
      console.log("No rows inserted or updated");
    }

    await client.release;
  } catch (error) {
    console.error("Error upserting row:", error);
  }
}

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

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/daily-page", async (req, res) => {
  //getCurrentDate with format DDDD, dd/MMMM/yyyy
  let data = {
    date: getCurrentDateLong(),
  };

  //getCurrentDate with format yyyy-mm-dd
  const storedMessage = await getMessageContent(getCurrentDate());

  // Pass data to the EJS template
  res.render("daily-page", { data: data, message: storedMessage });
});

// Route handler for form submission
app.post("/daily-page", async (req, res) => {
  // Update the stored message
  const newContentPage = req.body.message;
  // Do something with the submitted message
  console.log("Submitted content:", newContentPage);

  await upsertRow(newContentPage);

  // End the response with a status code, e.g., 204 No Content
  res.status(204).send();
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
