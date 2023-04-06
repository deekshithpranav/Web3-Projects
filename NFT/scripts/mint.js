const hre = require('hardhat');
async function main() {
  const tokenURI = "<https://gateway.pinata.cloud/ipfs/QmRGmhjhh6cXR2dXhWncY9tEmy4YP88YhcmnxtB2EZHL26?_gl=1*1xbpq1u*rs_ga*MjBkMDkxNTUtNjY5NC00OTdjLTg2YmYtOTQ2YmUwYzNhMzcx*rs_ga_5RMPXG14TE*MTY4MDgwMTAzNS4xLjEuMTY4MDgwMTQ5OS40OC4wLjA.>"; 
// this is URL that you will get from Pinata
const nftContractFactory = await ethers.getContractFactory("NFT");
const nftContractInstance = new ethers.Contract(
    "0x1360b09FF63b4e81EdDf4b24C903bfCb3b8cB8a0", 
    //insert contract address that gets deployed
    nftContractFactory.interface,
  )
const signer = await ethers.provider.getSigner();
const signerAddress = await signer.getAddress()
const txn = await nftContractInstance.connect(signer).mint(signerAddress, tokenURI)
  
txn.wait();
  console.log(`Your transaction has been successfully broadcasted! The transaction hash is ${txn.hash}`);
  if (hre.network.config.url != '') {
    console.log(`\\nPlease follow this link opensea.io/${signerAddress}`);
  };
};
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});