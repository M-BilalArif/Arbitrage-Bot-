const { Web3 } = require('web3');
const web3 = new Web3('https://hidden-proud-cloud.bsc.quiknode.pro/');

const routerAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'; // Router address of the DEX
const BabySwap= '0x325E343f1dE602396E256B67eFd1F61C3A6B38Bd';
const BiSwap=  '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8';
const ApeSwap=  '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7';
const routerABI = require('./getAmountOutABI');


const routerContract = new web3.eth.Contract(routerABI, routerAddress);

const fetchPrice = async (amountIn, tokenIn, tokenOut) => {
  try {
    const amounts = await routerContract.methods
      .getAmountsOut(amountIn, [tokenIn, tokenOut])
      .call();
      const price=web3.utils.fromWei(amounts[1], 'ether');
       
    return (price * 1000000000000000000);
  } catch (error) {
    console.error('Error fetching price:', error);
  }
};

fetchPrice('1', '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', '0x55d398326f99059fF775485246999027B3197955')
  
  .then(console.log)
  .catch(console.error);           
