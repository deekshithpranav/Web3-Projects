/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers")
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "buildbear",
  networks: {
    hardhat: {},
    buildbear: {
      url: "https://rpc.buildbear.io/Yabbering_Dud_Bolt_b19a4c55"
    }
  },
  etherscan: {
    apiKey: {
      buildbear: "verifyContract",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 8664,
        urls: {
          apiURL: "https://rpc.buildbear.io/verify/etherscan/Yabbering_Dud_Bolt_b19a4c55",
          browserURL: "https://explorer.buildbear.io/Yabbering_Dud_Bolt_b19a4c55",
        },
      },
    ],
  }
};
