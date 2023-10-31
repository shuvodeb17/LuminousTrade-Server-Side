const app = require('./app');
const connectDB = require('./config/db');
const { PORT } = require("./secret");
require("dotenv").config({ path: "../.env" });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  connectDB();
});