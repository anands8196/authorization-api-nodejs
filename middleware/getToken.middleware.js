const jwt = require("jsonwebtoken");
const fs = require("fs");
const SimpleSchema = require("simpl-schema");

const authorization_code_validator = new SimpleSchema({
  code: { type: String },
});

const getToken = (req, res, next) => {
  console.log("Method: getToken REQUEST.PARAMS", req.params);
  authorization_code_validator.validate(req.params);
  let pvtKey = fs.readFileSync("./key.pem", "utf8");
  let token = jwt.sign({ authorization: req.params }, pvtKey, {
    algorithm: "HS256",
  });
  console.log("token: ", token);
  res.send(token);
  return next();
};
module.exports = getToken;
