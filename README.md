# 🏗 The MHGN Scaffold

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

MHGN Scaffold is a integrations repo for adding new features to the MHGN Hoarding Gateway and other Hoarder Labs products. It can be used to quickly test smart contracts and build frontends or just act as a dash board for interacting with different contracts and networks.

So far ive started integrating the MHGN Hoarding Gateway into MHGN Scaffold once complete we will build games on top of this code base to utilize social logins for gaming.

We come up with a new NFT gaming use case for BOP token. Hoarders will be able to mint WBOP using BOP tokens and then purchase MHGN NFTs that can only be minted using WBOP. We may develop NFT hoarding that rewards WBOP

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/moneyhoardersglobalnetwork/mhgn-hoarding-gateway/blob/main/packages/nextjs/public/hoarder.png)

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.

## Deploying to Vercel

Vercel yarn vercel:yolo //Deploys to production and skips linting must delete project to redeploy try deploying to production with (yarn vercel:yolo --prod) command

## Github pushing Git Hub Staging, Commiting, Pushing //Commands for updating repo on github(Build this out)

//Set remote origin

git remote set-url origin https://github.com/moneyhoardersglobalnetwork/new-hoardinggateway.git

//Check remote origin
git remote -v

git add . //adds modified files to commit# mhgn-hoarding-gateway

git commit -m "update from local" // Commit your changes to be pushed to repo

Use the --no-verify option to skip git commit hooks, e.g. git commit -m "commit message" --no-verify . When the --no-verify option is used, the pre-commit and commit-msg hooks are bypassed. Copied! You can also use the -n option, which is short for --no-verify .

git push //push to repo //Push updates to repo (main)

## Latest Updates //Any New Tweaks that may need to be addressed
We are currently upgrading the BOP UI with a more simple Hoard and UnHoard UI using the MustHodl repo and its components.
