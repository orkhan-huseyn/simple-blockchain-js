
const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("BLOCK MINED: %s", this.hash);
    }

}

class Blockchain {

    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
    }

    createGenesisBlock() {
        return new Block(0, '01/01/2017', 'Genesis block', '000');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++ ){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

        }

        return true;
    }

}

let savjeeCoin = new Blockchain();

/* add some blocks */
console.log('Mining Block 1...');
savjeeCoin.addBlock(new Block(1, '10/07/2017', {amount: 4}));
console.log('Mining Block 2...');
savjeeCoin.addBlock(new Block(1, '12/07/2017', {amount: 10}));
console.log('Mining Block 3...');
savjeeCoin.addBlock(new Block(1, '11/07/2017', {amount: 6}));

/* try to override data */
savjeeCoin.chain[1].data = {amount: 100};
savjeeCoin.chain[1].hash = savjeeCoin.chain[1].calculateHash();

/* log chain */
console.log(JSON.stringify(savjeeCoin, null, 4));
/* check if chain is valid */
console.log("CHAIN IS VALID: %s", savjeeCoin.isValid());