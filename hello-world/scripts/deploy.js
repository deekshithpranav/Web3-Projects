const { ethers } = require('hardhat');
async function main() {
    
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
 
   
    const simpleStorage = await SimpleStorage.deploy();
    console.log("Contract deployed to address:", simpleStorage.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });