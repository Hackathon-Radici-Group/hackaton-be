require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      from: "0xC46cBACFc47590625EA6c5d293bb9A8f8eFfE6Fa"
    }
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './abis/',
  compilers: {
    solc: {
      version: "0.8.3",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}