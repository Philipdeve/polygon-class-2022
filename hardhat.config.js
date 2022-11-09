require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { MUMBAI_RPC_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
         url: MUMBAI_RPC_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
