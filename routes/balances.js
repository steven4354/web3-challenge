var express = require("express");
var router = express.Router();
var Web3 = require("web3");

// Use the infura node provider
web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/GiqNhyykFkQe8Y0BPlHD"
  )
);

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("balances", {
    addr: "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a",
    contract: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
    name: "Golem"
  });
});

/* GET users listing. */
router.post("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
