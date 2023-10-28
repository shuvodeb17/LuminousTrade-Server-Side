require("dotenv").config({ path: "../.env" });

const PORT = process.env.PORT || 3002;
const DB_URL = process.env.MONGODB_URL


module.exports = { PORT, DB_URL };
