//Store some state variables.
import { useState } from 'react';//connect to our infura endpoint
import { providers, ethers } from 'ethers';//check if metamask is installed in the browser.
import detectEthereumProvider from '@metamask/detect-provider';//uniswap widgets library
import { SwapWidget } from '@uniswap/widgets';
import React from 'react'

function Swap() {
  return (
    <div>Swap</div>
  )
}

export default Swap