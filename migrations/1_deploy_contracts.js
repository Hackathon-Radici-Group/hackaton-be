// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");
const Radici = artifacts.require("Radici.sol");
const Marketplace = artifacts.require("Marketplace.sol");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(Marketplace);
  deployer.deploy(Radici);
};
