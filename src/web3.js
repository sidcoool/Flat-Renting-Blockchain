import Web3 from 'web3'
let ethereum = window.ethereum;
let web3 = window.web3;
// if (typeof ethereum !== 'undefined') {
//     ethereum.enable().then(et => {
//         web3 = new Web3(ethereum);
//     });
    
// } else if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
// } else {
//     web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));
// }

web3 = new Web3(web3.currentProvider);

export default web3
