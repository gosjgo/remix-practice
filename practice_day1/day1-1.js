/**
 * 마스터링 이더리움 4장의 개인키를 입력으로 사용
 * k = f8f8a2f43c8376ccb0871305060d7b27b0554d2cc72bccf41b2705608452f315
 * 참고 링크 https://github.com/ethereumbook/ethereumbook/blob/develop/04keys-addresses.asciidoc#ethereum-addresses
 */
function getPublicKey(privateKey) {
  /*
   * TODO: 여기를 완성하세요.
   */
  return "";
}

function getEthereumAddress(publicKey) {
  /*
   * TODO: 여기를 완성하세요.
   */
  return "";
}

const args = process.argv;
let privateKey = args[2];

if (!privateKey) {
  console.error("[Error] Enter Private Key");
  return;
}
if (privateKey.startsWith("0x")) {
  privateKey = privateKey.slice(2);
}
if (privateKey.length != 64) {
  console.error("[Error] Malformed Private Key");
  return;
}

const publicKey = getPublicKey(privateKey);
if (!publicKey.startsWith("04")) {
  console.warn("[WARN] Wrong Public Key");
  return;
}

console.log(`public key: ${publicKey}`);
console.log(`address: ${getEthereumAddress(publicKey)}`);
