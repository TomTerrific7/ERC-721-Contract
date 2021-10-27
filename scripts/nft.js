const frens = [
    "0x63Aefaab54989C065C0Bf83Dc84Fe31288a11F4B"
];

const addr = "0x9afb5556eC4eD4cBb34221B3CA06e29A53331239";

async function main() {
  const wizard = await hre.ethers.getContractAt("Players", addr);

  const signer = await ethers.provider.getSigner(0);
  const nonce = await signer.getTransactionCount();
  for(let i = 0; i < frens.length; i++) {
    const tokenURI = "ipfs://ipfs//QmNtEeSPkQ2ZrCVLqiYnyrA6cHtMgpYVRGV4TYsxB7T9gm";
    await wizard.awardItem(frens[i], tokenURI, {
      nonce: nonce + i,
    });
  }

  console.log("Minting complete!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });