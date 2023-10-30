const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../.env" });

const jwtCheck = (req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
};

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({
      error: true,
      message: "unauthorized access",
    });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      res.status(401).json({
        error: true,
        message: "unauthorized access",
      });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = { jwtCheck, verifyJWT };
