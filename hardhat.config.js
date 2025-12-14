require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load the .env file

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = "YYS6THB7XIXGQACZWPAY9WSWNNPYKAFZFT";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
    sepolia:{
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY,
  }
};
