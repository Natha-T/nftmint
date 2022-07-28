import React from "react";


import ReactDOM from 'react-dom/client';



import App from "./App";
import './index.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId of my dapp work on rinkeby.
const activeChainId = ChainId.Rinkeby;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThirdwebProvider desiredChainId={activeChainId}>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

