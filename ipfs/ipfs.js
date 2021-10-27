
const { create } = require("ipfs-http-client");
const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "AtlantaUnited",
      attributes: {
        league: "FIFA"
      },
      image: "https://gateway.ipfs.io/ipfs/QmQS6YKkzdqGFccjikWyXzFDdYbi6BShpb5rN4XeUdCVZy" ,
      description: "This ERC-721 represents 1% ownership of Atlanta United FC"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();