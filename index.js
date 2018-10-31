var Web3 = require('web3');

var web3 = new Web3('https://mainnet.infura.io');

web3.eth.getBalance('0x8AB21C65041778DFc7eC7995F9cDef3d5221a5ad').then(function(balance) {
  console.log(balance);
});
