// const { Web3 } = require('web3');
// const web3 = new Web3('https://hidden-proud-cloud.bsc.quiknode.pro/ ');

// // Router addresses of the different DEXes
// const routerAddresses = {
//   PancakeSwap: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
//   BabySwap: '0x325E343f1dE602396E256B67eFd1F61C3A6B38Bd',
//   ApeSwap: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
//   BiSwap: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',
// };

// const routerABI = require('./getAmountOutABI'); // Same ABI used for all routers

// // Function to fetch price from a specific DEX router
// const fetchPriceFromRouter = async (amountIn, tokenIn, tokenOut, routerName, routerAddress) => {
//   try {
//     const routerContract = new web3.eth.Contract(routerABI, routerAddress);
//     const amounts = await routerContract.methods
//       .getAmountsOut(amountIn, [tokenIn, tokenOut])
//       .call();
//     const price = web3.utils.fromWei(amounts[1], 'ether');
//     return { routerName, price: price  }; // Adjust the price to the desired format  * 1e18
//   } catch (error) {
//     console.error(`Error fetching price from ${routerName}:`, error);
//     return { routerName, price: null }; // Return null if error occurs
//   }
// };

// // Function to fetch prices from all DEX routers
// const fetchPrices = async (amountIn, tokenIn, tokenOut) => {
//   const promises = Object.entries(routerAddresses).map(([routerName, routerAddress]) =>
//     fetchPriceFromRouter(amountIn, tokenIn, tokenOut, routerName, routerAddress)
//   );

//   const results = await Promise.all(promises);

//   // Filter out routers where price was not fetched successfully
//   const availablePrices = results.filter(({ price }) => price !== null);
//   const unavailablePrices = results.filter(({ price }) => price === null);

//   return { availablePrices, unavailablePrices };
// };

// // Tokens (Example: USDT and BTCB)
// const tokenIn = '0x55d398326f99059fF775485246999027B3197955'; // USDT
// const tokenOut = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'; // BTCB

// // Fetch and display prices from all DEXes
// fetchPrices('1000000000000000000000', tokenIn, tokenOut)
//   .then(({ availablePrices, unavailablePrices }) => {
//     console.log('Available Prices:');
//     availablePrices.forEach(({ routerName, price }) =>
//       console.log(`${routerName}: ${price}`)
//     );

//     console.log('\nUnavailable Prices:');
//     unavailablePrices.forEach(({ routerName }) =>
//       console.log(`${routerName}: Price not available`)
//     );
//   })
//   .catch(console.error);





// const { Web3 } = require('web3');
// const web3 = new Web3('https://hidden-proud-cloud.bsc.quiknode.pro/ ');

// // Router addresses of the different DEXes
// const routerAddresses = {
//   PancakeSwap: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
//   BabySwap: '0x325E343f1dE602396E256B67eFd1F61C3A6B38Bd',
//   BiSwap: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',
//   ApeSwap: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7'
// };

// const routerABI = require('./getAmountOutABI'); // Same ABI used for all routers

// // Function to fetch price from a specific DEX router
// const fetchPriceFromRouter = async (amountIn, tokenIn, tokenOut, routerName, routerAddress) => {
//   try {
//     const routerContract = new web3.eth.Contract(routerABI, routerAddress);
//     const amounts = await routerContract.methods
//       .getAmountsOut(amountIn, [tokenIn, tokenOut])
//       .call();

//     // Fetch the amountOut value for tokenOut (e.g., BTC)
//     const amountOut = web3.utils.fromWei(amounts[1], 'ether'); // Convert output to ether units (adjustable)

//     // To get the price, divide the amountOut by the amountIn (in terms of USDT)
//     const price = amountOut / web3.utils.fromWei(amountIn, 'ether'); // amountIn is in Wei (1 USDT = 1e18)

//     return { routerName, price };
//   } catch (error) {
//     console.error(`Error fetching price from ${routerName}:`, error);
//     return { routerName, price: null }; // Return null if error occurs
//   }
// };

// // Function to fetch prices from all DEX routers
// const fetchPrices = async (amountIn, tokenIn, tokenOut) => {
//   const promises = Object.entries(routerAddresses).map(([routerName, routerAddress]) =>
//     fetchPriceFromRouter(amountIn, tokenIn, tokenOut, routerName, routerAddress)
//   );

//   const results = await Promise.all(promises);

//   // Filter out routers where price was not fetched successfully
//   const availablePrices = results.filter(({ price }) => price !== null);
//   const unavailablePrices = results.filter(({ price }) => price === null);

//   return { availablePrices, unavailablePrices };
// };

// // Tokens (Example: USDT and BTCB)
// const tokenIn = '0x55d398326f99059fF775485246999027B3197955'; // USDT
// const tokenOut = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'; // BTCB

// // Fetch and display prices from all DEXes
// fetchPrices('1000000000000000000', tokenIn, tokenOut) // 1 USDT in Wei (1e18)
//   .then(({ availablePrices, unavailablePrices }) => {
//     console.log('Available Prices:');
//     availablePrices.forEach(({ routerName, price }) =>
//       console.log(`${routerName}: ${price} `)
//     );

//     console.log('\nUnavailable Prices:');
//     unavailablePrices.forEach(({ routerName }) =>
//       console.log(`${routerName}: Price not available`)
//     );
//   })
//   .catch(console.error);




const { Web3 } = require('web3');
const web3 = new Web3('https://hidden-proud-cloud.bsc.quiknode.pro/');

// Router addresses of the different DEXes
const routerAddresses = {
  PancakeSwap: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  BabySwap: '0x325E343f1dE602396E256B67eFd1F61C3A6B38Bd',
  ApeSwap: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
  BiSwap: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',
};

const routerABI = require('./getAmountOutABI'); // Same ABI used for all routers

// Function to fetch price from a specific DEX router
const  fetchPriceFromRouter = async  (amountIn, tokenIn, tokenOut, routerName, routerAddress) => {
  try {
    const routerContract = new web3.eth.Contract(routerABI, routerAddress);
    const amounts = await routerContract.methods
      .getAmountsOut(amountIn, [tokenIn, tokenOut])
      .call();
    const price = web3.utils.fromWei(amounts[1], 'ether');
    return { routerName, price: price  }; // Adjust the price to the desired format  * 1e18
  } catch (error) {
    console.error(`Error fetching price from ${routerName}:`, error);
    return { routerName, price: null }; // Return null if error occurs
  }
};

// Function to fetch prices from all DEX routers
const fetchPrices = async (amountIn, tokenIn, tokenOut) => {
  const promises = Object.entries(routerAddresses).map(([routerName, routerAddress]) =>
    fetchPriceFromRouter(amountIn, tokenIn, tokenOut, routerName, routerAddress)
  );

  const results = await Promise.all(promises);

  // Filter out routers where price was not fetched successfully
  const availablePrices = results.filter(({ price }) => price !== null);
  const unavailablePrices = results.filter(({ price }) => price === null);

  return { availablePrices, unavailablePrices };
};

// Tokens (Example: USDT and BTCB)
const tokenIn = '0x55d398326f99059fF775485246999027B3197955'; // USDT
const tokenOut = '0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3'; // BTCB

// Fetch and display prices from all DEXes
fetchPrices('100000000000000000000', tokenIn, tokenOut)
  .then(({ availablePrices, unavailablePrices }) => {
    console.log('Available Prices:');
    availablePrices.forEach(({ routerName, price }) =>
      console.log(`${routerName}: ${price}`)
    );

    console.log('\nUnavailable Prices:');
    unavailablePrices.forEach(({ routerName }) =>
      console.log(`${routerName}: Price not available`)
    );
  })
  .catch(console.error);

