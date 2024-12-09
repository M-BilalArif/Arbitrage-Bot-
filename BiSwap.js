const { Web3 } = require('web3');
const web3 = new Web3('https://hidden-proud-cloud.bsc.quiknode.pro/ ');

const routerAddress = '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8'; // Router address of the DEX
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
