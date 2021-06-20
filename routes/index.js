var express = require("express");
const ip = require("ip");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Demo App", author: "Cameron Chardukian" });
});

router.get("/api/getAddressInfo", function(req, res, next) {
  const { name } = req.query;
  const ipAddress = ip.address();
  if (name) {
    return res.json({
      ipAddress,
      greeting: `Thank you for visiting our page ${name}`,
      "x-hello-world": "CC"
    });
  } else {
    return res.json({
      ipAddress,
      "x-hello-world": "CC"
    });
  }
});

module.exports = router;
