// npm install rlp
// npm install ethereumjs-util
// npm install web3
const RLP = require("rlp");
const { ecsign, keccak256 } = require("ethereumjs-util");
const Web3 = require("web3");

const privateKey = hexToBytes(
  "f8f8a2f43c8376ccb0871305060d7b27b0554d2cc72bccf41b2705608452f315"
);
const address = "ADDRESS HERE"; // TODO
// sepolia chain Id
// see. https://github.com/eth-clients/sepolia
const chainId = 11155111;

function bytesToHex(byteArray) {
  var s = "";
  byteArray.forEach(function (byte) {
    s += ("0" + (byte & 0xff).toString(16)).slice(-2);
  });
  return s;
}

function hexToBytes(hexString) {
  for (var bytes = [], c = 0; c < hexString.length; c += 2)
    bytes.push(parseInt(hexString.substr(c, 2), 16));
  return Buffer.from(bytes);
}

async function createRawTx() {
  // see. https://github.com/eth-clients/sepolia
  const web3 = new Web3("https://rpc.sepolia.org");
  // TODO:
  // transction을 만들고
  // RLP 인코딩한다.

  return "";
}

function getSignedTx(rawTx) {
  // TODO
  // 1. 원문 트랜잭션을 keccak256 해시한다.
  // 2. 1결과 해시의 디지털 서명을 만든다.
  // 3. rawTx에 디지털 서명을 붙여 서명된 트랜잭션을 만든다.

  return "";
}

createRawTx().then((rawTx) => {
  const signedTx = getSignedTx(rawTx);

  console.log(`Raw Transaction: ${bytesToHex(rawTx)}`);
  console.log(`Signed Transaction: ${bytesToHex(signedTx)}`);
});
