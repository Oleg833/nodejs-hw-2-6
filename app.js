// const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");

// const contactsRouter = require("./routes/api/contacts");

// const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
// app.use(cors());

// app.use(express.json());

// app.use("/api/contacts", contactsRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Unknown error" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

// module.exports = app;

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");

const contacts = require("./models/contacts.json");

const app = express(); // app web server
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.status(201).json(contacts);
});
app.get("/contacts", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send("<h2>Contacts</h2>");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = { app };
