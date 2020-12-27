const UniswapV2Router02 = artifacts.require('UniswapV2Router02');
const UniswapV2Factory = artifacts.require('UniswapV2Factory');
module.exports = async function(deployer, network, accounts) {
    let WETH = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
    if( network == 'testnet' ){
        WETH = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd';
    }
    const _factory = await UniswapV2Factory.deployed();
    if( _factory.address ) {
        await deployer.deploy(UniswapV2Router02, _factory.address, WETH);
        console.log(network, 'UniswapV2Factory', _factory.address);
        console.log(network, 'WETH', WETH);
    }else{
        console.log("!_factory.address");
    }
};
