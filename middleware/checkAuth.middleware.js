const jwt = require("jsonwebtoken");
const fs = require("fs");

const isAuth = (req, res, next) => {
  if (typeof req.headers.authorization !== "undefined") {
    let token = req.headers.authorization.split(" ")[1];
    let pvtKey = fs.readFileSync("./key.pem", "utf8");
    jwt.verify(token, pvtKey, { algorithm: "HS256" }, (err, data) => {
      if (err) {
        res.status(500).json({ error: "NOT AUTHORIZED" });
      }
      // console.log("data: ", data);
      // res.send(data);
      if (data) {
        console.log(data);
        let secretData = fs.readFileSync("./private/secretData.json", "utf8");
        res.status(200).send(secretData);
      }

      return next();
    });
  } else {
    res.status(500).json({ error: "NOT AUTHORIZED" });
  }
};

const getData = isAuth;
module.exports = getData;
