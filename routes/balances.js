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
  // User address
  var address = req.address || "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a";

  // Token contract address]
  var contractAddress =
    req.contract || "0xa74476443119A942dE498590Fe1f2454d7D4aC0d";

  // For for balanceOf: remove the 0x
  var tknAddress = addr.substring(2);

  // Format for balanceOf: add in the contract
  var contractData = "0x70a08231000000000000000000000000" + tknAddress;

  // Utilize web3 to call balance
  web3.eth.call(
    {
      to: contractAddr, 
      data: contractData 
    },
    function(err, result) {
      if (result) {
        var tokens = web3.utils.toBN(result).toString();
        res.json({ balance: web3.utils.fromWei(tokens, "ether") });
      } else {
        res.json({ error: err });
      }
    }
  );
});

module.exports = router;
