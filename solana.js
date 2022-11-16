const {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

class Solana {
  connection;

  constructor(environment = "mainnet") {
    this.initiateConnection(environment);
  }

  initiateConnection(environment = "devnet") {
    try {
      this.connection = new Connection(clusterApiUrl(environment), "confirmed");
    } catch (e) {
      console.log("Unable to initiate a connection to ", environment);
    }
  }

  async getWalletBalance(publicKey) {
    try {
      return (
        parseInt(await this.connection.getBalance(new PublicKey(publicKey))) /
        LAMPORTS_PER_SOL
      );
    } catch (e) {
      console.log(e);
    }
  }

  async airDropSol(publicKey) {
    try {
      console.log(`Airdropping SOL to ${publicKey}!`);
      const airDropSignature = await this.connection.requestAirdrop(
        new PublicKey(publicKey),
        2 * LAMPORTS_PER_SOL
      );
      console.log(`Confirming Transaction!`);
      await this.connection.confirmTransaction(airDropSignature);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Solana;
