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
  var addr = req.addr || "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a";

  // ECR20 Token Address
  var contractAddr =
    req.contract || "0xa74476443119A942dE498590Fe1f2454d7D4aC0d";

  // Get the address ready for the call, substring removes the '0x', as its not required
  var tknAddress = addr.substring(2);

  // '0x70a08231' is the contract 'balanceOf()' ERC20 token function in hex. A zero buffer is required and then we add the previously defined address with tokens
  var contractData = "0x70a08231000000000000000000000000" + tknAddress;

  // Now we call the token contract with the variables from above, response will be a big number string
  web3.eth.call(
    {
      to: contractAddr, // Contract address, used call the token balance of the address in question
      data: contractData // Combination of contractData and tknAddress, required to call the balance of an address
    },
    function(err, result) {
      if (result) {
        var tokens = web3.utils.toBN(result).toString(); // Convert the result to a usable number string
        res.json({ balance: web3.utils.fromWei(tokens, "ether") }); // Change the string to be in Ether not Wei, and show it in the console
      } else {
        res.json({ error: err }); // Dump errors here
      }
    }
  );
});

module.exports = router;
