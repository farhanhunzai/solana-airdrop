# Solana Network Airdrop Example Code

This is a sample web3 code that airdrops 2 SOL to a wallet address passed as an argument in CLI.

## Tech

This sample code uses some open source projects to work properly:

- [node.js](https://nodejs.org/) - evented I/O for the backend
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) - command line interface for Solana

## Installation

First of all install Solana CLI tools by following official [Solana Documentation](https://docs.solana.com/cli/install-solana-cli-tools) and follow the [steps](https://docs.solana.com/wallet-guide/paper-wallet) to create a paper wallet and save the public and private keys for later use.

```sh
cd solana-airdrop
npm i
node app [generated public key]
```
