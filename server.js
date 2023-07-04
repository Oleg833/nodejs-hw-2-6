const app = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

require("dotenv").config();
const { PORT, DB_HOST } = process.env;

app.listen(PORT, () => {
  mongoose
    .connect(DB_HOST)
    .then(() => {
      app.listen(3000);
      console.log(`Server running. Use our API on port: ${PORT}.`);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
});
