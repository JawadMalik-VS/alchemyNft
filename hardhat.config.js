require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/lufJE5_FqTBl8w8iUcwNHLul1VTaRfR0',
      accounts: ['2da523498caed447af9be86f16dfa180d35fbd54908bf22ffd92095e53c952f6']
    }
  }
};