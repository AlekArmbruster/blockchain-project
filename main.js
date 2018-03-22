const Block = require('./block');
const Blockchain = require('./blockchain');

let vivifyCoin =  new Blockchain();

console.log('Mining block 1... ')
vivifyCoin.addBlock(new Block(1, '10/03/2018', { amount: 4 }));

console.log('Mining block 2... ')
vivifyCoin.addBlock(new Block(2, '12/03/2018', { amount: 10 }));



 // console.log(JSON.stringify(vivifyCoin, null, 4));
