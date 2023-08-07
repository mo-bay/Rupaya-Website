//Store some state variables.
import { useState } from "react"; //connect to our infura endpoint
import { providers, ethers } from "ethers"; //check if metamask is installed in the browser.
import detectEthereumProvider from "@metamask/detect-provider"; //uniswap widgets library
import { SwapWidget } from "@uniswap/widgets";
import React from "react";
const jsonRpcEndpoint = `https://bsc-dataseed1.binance.org/`;
const jsonRpcProvider = new providers.JsonRpcProvider(jsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(jsonRpcProvider);

function Swap()  {  const [account, setAccount] = useState({
        address: '',
        provider: provider,
    })

    async function connectWallet() {//check if Metamask is installed in the browser
        const ethereumProvider = await detectEthereumProvider();  if (ethereumProvider) {  //prompt user to connect their wallet
          const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
              })     const address = accounts[0];     setAccount({
                address: address,
                provider: ethereumProvider
             })
          }
        }

        return (
            <div className="Swap">
              <div>
                <button onClick={connectWallet}>Connect Wallet</button>
              </div>    <div className="Uniswap">
                <SwapWidget
                  provider={account.provider}
                  JsonRpcEndpoint={jsonRpcEndpoint} />
              </div>
            </div>
            );
          }

export default Swap;
