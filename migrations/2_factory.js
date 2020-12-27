const UniswapV2Factory = artifacts.require('UniswapV2Factory');
const UniswapV2Pair = artifacts.require('UniswapV2Pair');
module.exports = async function(deployer, network, accounts) {
    const feeTo = accounts[0];
    await deployer.deploy(UniswapV2Factory, feeTo);
    const _factory = await UniswapV2Factory.deployed();
    console.log(network, 'UniswapV2Factory', _factory.address);
    console.log("UniswapV2Pair bytecode hash:", (web3.utils.keccak256(UniswapV2Pair.bytecode)).substring(2))
    const r = await _factory.pairCodeHash();
    console.log('pairCodeHash', r);

};
