# Simple Blockchain with JavaScript

Run: 
```
$ npm install
$ node ./main.js
```
Output:
```
Mining Block 1...
BLOCK MINED: 0007c1c7563a3fc42205442dc014ad7490fa240d278aca30639f2f77de9e2b08
Mining Block 2...
BLOCK MINED: 000ae95517bd1a6af16099d1575c97fbfd66e9c826b63ba355ab38d0411b6f8c
Mining Block 3...
BLOCK MINED: 000342028f4c662d36aaffc837192b082a9367fefc5b1d85e39d5af2e0f17b3b
{
    "chain": [
        {
            "index": 0,
            "timestamp": "01/01/2017",
            "data": "Genesis block",
            "previousHash": "000",
            "hash": "719485233739f0c541d348d4867ce257b74fa16379182a24867c58bd3475b729",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "10/07/2017",
            "data": {
                "amount": 100
            },
            "previousHash": "719485233739f0c541d348d4867ce257b74fa16379182a24867c58bd3475b729",
            "hash": "17957d438cafeaac4566fd2730c536b3789dff287825ce89d7a26a1e87efc9f0",
            "nonce": 18896
        },
        {
            "index": 1,
            "timestamp": "12/07/2017",
            "data": {
                "amount": 10
            },
            "previousHash": "0007c1c7563a3fc42205442dc014ad7490fa240d278aca30639f2f77de9e2b08",
            "hash": "000ae95517bd1a6af16099d1575c97fbfd66e9c826b63ba355ab38d0411b6f8c",
            "nonce": 2187
        },
        {
            "index": 1,
            "timestamp": "11/07/2017",
            "data": {
                "amount": 6
            },
            "previousHash": "000ae95517bd1a6af16099d1575c97fbfd66e9c826b63ba355ab38d0411b6f8c",
            "hash": "000342028f4c662d36aaffc837192b082a9367fefc5b1d85e39d5af2e0f17b3b",
            "nonce": 3204
        }
    ],
    "difficulty": 3
}
CHAIN IS VALID: false

```