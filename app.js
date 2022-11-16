const { LAMPORTS_PER_SOL } = require("@solana/web3.js");
const Solana = require("./solana");

// Get the public key from arguement where airdrop is needed.
const publicKey = process.argv[2];

main = async () => {
  const solana = new Solana("devnet");
  console.log("Wallet Balance is: ", await solana.getWalletBalance(publicKey));
  await solana.airDropSol(publicKey);
  console.log("Wallet Balance is: ", await solana.getWalletBalance(publicKey));
};
main();
