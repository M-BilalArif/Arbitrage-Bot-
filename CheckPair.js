const { Web3 } = require('web3');
const web3 = new Web3('https://hidden-proud-cloud.bsc.quiknode.pro/');

const factoryAddresses = {
  PancakeSwap: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
  BiSwap: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
  ApeSwap: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
  BabySwap: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da'
};

// Importing getPair function ABI
const getPairABI = require('./getPairABI');

// Function to get pair address for a specific factory
async function getPairAddress(factoryName, factoryAddress, token0, token1) {
  try {
    const factoryContract = new web3.eth.Contract(getPairABI, factoryAddress);
    const pairAddress = await factoryContract.methods.getPair(token0, token1).call();
    
    if (pairAddress === '0x0000000000000000000000000000000000000000') {
      throw new Error(`Pair not available on ${factoryName}`);
    }
    
    return { factoryName, pairAddress };
  } catch (error) {
    console.error(`Error for ${factoryName}:`, error.message);
    return { factoryName, pairAddress: null };
  }
}

// Function to fetch pair addresses from all factories
async function getAllPairAddresses(token0, token1) {
  const promises = Object.entries(factoryAddresses).map(([factoryName, factoryAddress]) =>
    getPairAddress(factoryName, factoryAddress, token0, token1)
  );

  const results = await Promise.all(promises);

  const availablePairs = results.filter(({ pairAddress }) => pairAddress !== null);
  const unavailablePairs = results.filter(({ pairAddress }) => pairAddress === null);

  return { availablePairs, unavailablePairs };
}

// Tokens
const token0 = '0x55d398326f99059fF775485246999027B3197955'; // USDT
const token1 = '0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3'; // BTCB

// Fetch and display all pair addresses
getAllPairAddresses(token0, token1)
  .then(({ availablePairs, unavailablePairs }) => {
    console.log('Available Pairs:');
    availablePairs.forEach(({ factoryName, pairAddress }) =>
      console.log(`${factoryName}: ${pairAddress}`)
    );

    console.log('\nUnavailable Pairs:');
    unavailablePairs.forEach(({ factoryName }) =>
      console.log(`${factoryName}: Pair not available`)
    );
  })
  .catch(console.error);
