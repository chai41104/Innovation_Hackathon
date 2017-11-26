var extractor = artifacts.require("./ExtractMethods.sol");
var grantor = artifacts.require("./Grantor.sol");
var mine = artifacts.require("./Mine.sol");
var miner = artifacts.require("./Miner.sol");
var transport = artifacts.require("./Transport.sol");
var transporter = artifacts.require("./Transporter.sol")

module.exports = function(deployer) {
  deployer.deploy(extractor);
  deployer.deploy(grantor);
  deployer.deploy(mine);
  deployer.deploy(miner);
  deployer.deploy(transport);
  deployer.deploy(transporter);
};
