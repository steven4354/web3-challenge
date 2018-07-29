var express = require("express");
var router = express.Router();
var Web3 = require("web3");

// Use the infura node provider
web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/GiqNhyykFkQe8Y0BPlHD"
  )
);

/* GET to show the hbs page. */
router.get("/", function(req, res, next) {
  res.render("balances", {
    addr: "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a",
    contract: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
    name: "Golem"
  });
});

/* POST address for balance information listing. */
router.post("/", function(req, res, next) {
  // User address
  var address = req.address || "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a";

  // Token contract address]
  var contractAddress =
    req.contract || "0xa74476443119A942dE498590Fe1f2454d7D4aC0d";

  // For for balanceOf: remove the 0x
  var tknAddress = address.substring(2);

  // Format for balanceOf: add in the contract
  var contractData = "0x70a08231000000000000000000000000" + tknAddress;

  // Utilize web3 to call balance
  web3.eth.call(
    {
      to: contractAddress,
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

/* POST address for theDAO balance information listing. */
router.post("/thedao", function(req, res, next) {
  // User address
  var address = req.address || "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a";

  // Token contract address]
  var contractAddress = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413";

  // For for balanceOf: remove the 0x
  var tknAddress = address.substring(2);

  // Format for balanceOf: add in the contract
  var contractData = "0x70a08231000000000000000000000000" + tknAddress;

  // Utilize web3 to call balance
  web3.eth.call(
    {
      to: contractAddress,
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

/* POST address for EOS balance information listing. */
router.post("/eos", function(req, res, next) {
  // User address
  var address = req.address || "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a";

  // Token contract address]
  var contractAddress = "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0";

  // For for balanceOf: remove the 0x
  var tknAddress = address.substring(2);

  // Format for balanceOf: add in the contract
  var contractData = "0x70a08231000000000000000000000000" + tknAddress;

  // Utilize web3 to call balance
  web3.eth.call(
    {
      to: contractAddress,
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

/* POST address for Bancor balance information listing. */
router.post("/bancor", function(req, res, next) {
  // User address
  var address = req.address || "0xda0aed568d9a2dbdcbafc1576fedc633d28eee9a";

  // Token contract address]
  var contractAddress = "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C";

  // For for balanceOf: remove the 0x
  var tknAddress = address.substring(2);

  // Format for balanceOf: add in the contract
  var contractData = "0x70a08231000000000000000000000000" + tknAddress;

  // Utilize web3 to call balance
  web3.eth.call(
    {
      to: contractAddress,
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
