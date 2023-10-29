const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../.env" });

const jwtCheck = (req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({token});
};

module.exports = { jwtCheck };
