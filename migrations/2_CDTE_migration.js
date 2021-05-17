const CDTE = artifacts.require("CDTE");

module.exports = function(_deployer) {
  // Set initial supply to 2100w
  const totalSupploy = BigInt(2100 * 10000) * BigInt(1e18);
  _deployer.deploy(CDTE, `0x${totalSupploy.toString(16)}`);
};
