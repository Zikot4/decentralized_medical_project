var DMToken = artifacts.require("./token/DMToken.sol");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(DMToken);
};
