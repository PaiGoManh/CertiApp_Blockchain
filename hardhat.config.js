require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"infurasepolia",
  networks: {
    localhost: {
      url:"http://127.0.0.1:8545/"
    },
    infurasepolia: {
      url :"https://sepolia.infura.io/v3/129df6e60dba4464831b233b9bdd3a00",
      accounts:["9fdafbea5f9a2c0412427a77c5127734f384ba995a1767eac047aee2001ca9b9"]
    }
  },
  solidity: "0.8.20",
};
