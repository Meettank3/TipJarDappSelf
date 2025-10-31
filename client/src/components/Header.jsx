import React from 'react'

const Header = () => {
  return (
    <div className='bg-black h-16 flex flex-row items-center justify-between text-white text-2xl font-semibold'>
        {/* for Icone*/}
        <div className='p-16 flex items-center justify-center'>
            TipDipJar
        </div>

        {/* for wallet connection */}
        <div className='p-6 flex items-center justify-center border-2 border-white rounded-lg mr-8 hover:bg-white hover:text-black cursor-pointer'>
            Connect Wallet
        </div>
    </div>
  )
}

export default Header
