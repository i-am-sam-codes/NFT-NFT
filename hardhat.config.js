require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",

  networks: {
    rinkeby: {
      //How to define which test network to deploy to the
      url: ALCHEMY_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
    


    //How do we define which account to use for deployment 
  },
};
