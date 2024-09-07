# 🧾 Certificate DApp

Certificate DApp is a decentralized application built on Ethereum blockchain to issue and retrieve certificates. It allows institutions to issue blockchain-verified certificates that can be easily retrieved and verified by individuals.

## 🎯 Purpose

The DApp is designed to allow educational institutions or other organizations to issue tamper-proof certificates on the blockchain. Users can retrieve certificates by providing the certificate ID, ensuring trust, transparency, and decentralization.

## 🛠️ Built With

   <img src="https://skillicons.dev/icons?i=vscode,react,tailwind,nodejs,solidity,hardhat"/>

## 📢 Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16.x recommended).
- **Metamask**: A browser extension to interact with Ethereum-based applications.

## ⚙️ Run Locally

Clone the Project and change into the directory

```
https://github.com/PaiGoManh/Certificate-DApp_Blockchain.git
cd Certificate-DApp_Blockchain
```

Install dependencies

```
npm install
```
```
npm i hardhat
```
```
npm hardhat compile
```
Add a main network to hardhat.config.
- here im using sepolia and infura 
- add your api key for your sepolia from infura
- add your metamask private key 
eg.
```
module.exports = {
  defaultNetwork:"infurasepolia",
  networks: {
    localhost: {
      url:"http://127.0.0.1:8545/"
    },
    infurasepolia: {
      url :"your api key of infura or any other accounts",
      accounts:["your metamask private key"]
    }
  },
  solidity: "0.8.20",
};
```
```
npx hardhat node
```
open another terminal in vscode(ctrl+shift+`)

```
npx hardhat ignition deploy ignition/modules/Cert.js
``` 
open another terminal in vscode(ctrl+shift+`)

```
cd ui
npm i 
```
Go to folder src/SCdata

- add Abi code to cert.json file
- add deployed address to deployedaddress.json(deployed address will get after deploying the contract)
  
```
npm run dev
```
- connect your metamask
- issue certificate
- enter details
- make payment in metamask
- after metamask confirm get you certificate by enter your uinique id

## 📦 Planned Updates

Improved UI/UX.
MetaMask integration for certificate verification.
Compatibility with mobile devices.
Desktop application for certificate management.

## 🎗️ Contributing

Contributions are welcome! Feel free to fork the project and submit a pull request. Make sure to follow the steps below:

1. Fork the Project.
2. Create a Feature Branch (git checkout -b feature/<feature_name>).
3. Commit your changes (git commit -m 'Add <feature_name>').
4. Push to the branch (git push origin feature/<feature_name>).
5. Open a Pull Request.

## 📹 Demo 

<a href="https://youtu.be/67bsmRE0fdE?si=BUilx-31RPA7IwWI">
   <img src="https://github.com/PaiGoManh/Certificate-DApp_Blockchain/blob/main/thumbnail.png" width="500" height="300">
</a>
