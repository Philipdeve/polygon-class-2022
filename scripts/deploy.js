const {ethers} = require("hardhat");


async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

   // Start deployment, returning a promise that resolves to a contract object
   const hello_world = await HelloWorld.deploy("Hello World!");
   console.log("Contract deployed to address:", hello_world.address);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Contract deployed to address: 0xBd34900c6DB48b44854DF3971A9b8Ef851Ce5a92 - use the mumbai testnet
