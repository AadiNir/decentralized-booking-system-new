require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url:"https://sepolia.infura.io/v3/b93c94691af24bbf88d4eae7f1d8dede",
      accounts:["0x6fd12a2deec2f5525654495c0ee9b5604dcef3d7b4dd9cbfe62c7b2fe0eb4d04"]
    }
  }
};
