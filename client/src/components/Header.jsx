import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    /* Actual Nav Bar starts*/
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo  */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">💰</span>
            </div>
            <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' >TipDipJar</span>
          </div>
          {/* Wallet Connection */}
          <div > 
            <Button 
              text="Connect Wallet"
              onClick={() => console.log("Connecting Wallet...")}
              logo = "http://www.w3.org/2000/svg"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
