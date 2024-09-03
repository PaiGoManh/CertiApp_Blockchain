const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("certModule",(m) => {
    const cert = m.contract("Cert");
    return {cert};
});