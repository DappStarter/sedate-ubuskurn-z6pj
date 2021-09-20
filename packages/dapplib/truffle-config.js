require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan rival mean purpose hidden process oppose genius'; 
let testAccounts = [
"0x89b919d34b9506df07743e04f6b49f73a81144e7641a402bfb8412239abe0578",
"0xa2629bcc3f289b66f42d41c8c8677d6ee1b31a87406919ba335c4d57af0fdba0",
"0x0250b357c05e67f712f6fec4bb5dbb237aa545ebe5c3889b4c666004ef004514",
"0x25914d04d16adcb04d52dc610bc74a35790c5e43b2b06be01d226dc82fa7026d",
"0xb6a97da165fd2e90e5afda17ca01b2752155214a1ff1bcf0e0177c1246fefb9f",
"0x44b239440af00e9afad077c86c5e6706b3f54a7430b900028e4f7fd36a83585a",
"0x5082e0127388a0860754205562a723d2721a31e63b8588c8f61a87503f4ac864",
"0x6c6296f52aeb5b8066985da8340673e629494e966eadca39b3fc2d172aa50276",
"0xbf488e4cf411de3602d133ec78251b6950830d88cc07a9ecdad2b040ba51726a",
"0x1e97cb2fcb565647aed3062559085e463eef05c216ed1c211a25a4c266b9b410"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


