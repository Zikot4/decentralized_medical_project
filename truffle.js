/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */


// TODO: should be useful for testing by mocha
// require('babel-register')({
//   ignore: /node_modules\/(?!openzeppelin-solidity\/test\/helpers)/
// });
// require('babel-polyfill');


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>

  networks: {
      development: {
          host: "localhost",
          port: 9545,
          network_id: "*", // Match any network id
          build: "webpack"
      },
      ganache: {
          host: 'localhost',
          port: 7545,
          network_id: '*'
      },
  }
};
