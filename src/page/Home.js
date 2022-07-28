import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import '../index.css';
import React from 'react'

function Home() {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();

    
    return (
        <div className='flex justify-center items-center'>
    

        { address ? 
        <div className='sm:grid text-center lg:flex'>
    
          <button className=' bg-blue-500 hover:bg-red-700 text-white font-bold rounded  p-2 lg:bg-blue-500 hover:bg-red-700 text-white font-bold rounded '
       onClick={disconnectWallet}>
            Log Out
            </button>
    
    
          <p className='text-white serif p-2 '>Logged  as : {address}</p>
          </div>
    
          /*--------------------------------- */
    
          : <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={connectWithMetamask} >
            Login
            </button>  }
      
      
            </div>
    )
}

export default Home
