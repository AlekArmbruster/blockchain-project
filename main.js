const Block = require('./block');
const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

let vivifyCoin =  new Blockchain();

vivifyCoin.createTransaction(new Transaction('address1', 'address2', 100));
vivifyCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('Starting the miner...')
vivifyCoin.minePendingTransactions('miner-address');
console.log('Balance of miner is: ' + vivifyCoin.getBalanceOfAddress('miner-address')); 

console.log('Starting the miner again...')
vivifyCoin.minePendingTransactions('miner-address');
console.log('Balance of miner is: ' + vivifyCoin.getBalanceOfAddress('miner-address'));