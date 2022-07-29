//ethers.js comes built into hardhat
//ethers.js a nice library to work with ethereum and

// import ethers 
const  { ethers } = require("hardhat");


async function main() {
    // 1. Tell the script we want to deploy NFTee.sol contract
    const contract = await ethers.getContractFactory("NFTee");
    // 2. depoly it 
    const deployedContract = await contract.deploy();
    //2.1 Wait for contract deployment to finish 
    // await deployedContract.deployed();
    // 3. Print address of deployed contract
    console.log("NFT Contract deployed to: ", deployedContract.address);
    


}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});