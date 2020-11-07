require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain unfold hope enter off giggle'; 
let testAccounts = [
"0x87602b9281a54bcd6193697c8a1767794379f7172c5dccaee6031621aea573f0",
"0x6272c739a037271bb8628ac46f2e4b970949a5528a8891dae2b5a8fbadb6cfaf",
"0x8bc640e7335bb7ddbc2ba7e08e8c7db8de418f44ac8bcde11b0f952df32dc7a3",
"0xf8141cae9c28f9c387f11a7555d29bb6e4f7f12ffb23ff259d9fff1c2834fbc0",
"0xc89bee00e298699f2045c471d42112cd7bcda6423a6c4979aaa1fd51c34d6724",
"0x87dd6b140432c1df7d11000e15e55006218e6cb29c7c647d52809262cf9882fa",
"0x1e79b63dada6c2cef2bb0e2d24efdaa06718e58d49b1aa71bd4631fbd4e7f58d",
"0x49ed3256d2ff02c35cee6a1e2677f8330d513128bfb912c91c4cc76fc287f6c0",
"0x4c5d93349cefbf9f858c48cd07b96445178f5bef7a41081ce6fbc53c6412795d",
"0x5866802eee8ec3d0a95765484978043c2ab1914a390340330937db2680c72116"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
