import {useAddress, useNFTDrop, useClaimNFT } from '@thirdweb-dev/react'




export default function Mint() {
    
    // initialize the contract instance //
    const DropContract = useNFTDrop("0x42353F68CCB612053B9fE674cC1Fb6533511Cb43")

    // initialize the user adress //
    const address = useAddress();

    const {
        mutate: claimNft,
        isLoading,
        error,
      } = useClaimNFT(DropContract); // API call to claim the nft on the contract//
    
      if (error) {
        console.error("failed to claim nft", error);
      }
    
      return (
        <div className=''>
        <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          disabled={isLoading}
          onClick={() => claimNft({to: address, quantity: 1})} // one nft per user //
        >
          Claim NFT!
        </button></div>
      );
   
  }