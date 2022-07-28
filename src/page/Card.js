import React from 'react'
import { } from "@thirdweb-dev/react";
import Mint from './Mint';
import nftcard from '../img/nftcard.png';
function Card() {



    return (
        <div   className=' bg-gray-800  '>
     <div className='flex justify-center items-center '>
            <div className='w-[500px] h-[800px] bg-gray-900  rounded-xl text-center  justify-center items-center'>
                <img src={nftcard} alt='nft' className='h-[450px] w-screen place-self-auto rounded-xl w-full object-center  flex justify-center items-center' />
                <p className=' text-slate-300 font-bold  w-[450px] mt-8 indent-10 capitalize '> You can now Mint my first collection
                 using thirdweb. PIKITATK is a cool emoji you have different
                  backrground and all nft get the same rarity.
                 </p>
<div className='justify-center space-x-6 mt-24 flex'>
    
                <p className=' text-slate-300'> You can now MINT one NFT :  </p>
                <p className='text-gray-100'> / 1</p></div>
               <Mint/>
               <div className='text-slate-300 justify-center space-x-6 mt-8 flex'>
              <p> Total Supply : </p>
              <p> /11</p></div>
            </div>
</div>

     






      </div>
    )
}

export default Card;
