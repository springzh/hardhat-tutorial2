require("@nomiclabs/hardhat-waffle");

// Imports a Hardhat task definition, that can be used for testing the frontend.
require("./tasks/faucet");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
//const ALCHEMY_API_KEY = "KEY";
const ALCHEMY_API_KEY_URL = "https://eth-rinkeby.alchemyapi.io/v2/NhcHGWhtRtJoH4PwNsecGc8rsNN4k9AZ"

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
//const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";
RINKEBY_PRIVATE_KEY = "e4a77f43907466effb576f11ee7e2d868bf3634db88647031ecda80d5ded8691"

module.exports = {
  solidity: "0.7.3",
  networks: {
    rinkeby: {
      url:  ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY]
    }
  }
};
