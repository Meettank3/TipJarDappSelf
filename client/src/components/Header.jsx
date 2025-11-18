import React from 'react'
import { ethers } from "ethers";
import Button from './Button'

const Header = ({ accounts }) => {
    const getAccounts = () => {
    console.log(accounts);
  };

  const shortAddress = (addr) =>
    addr.slice(0, 6) + "..." + addr.slice(-4);

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
              text={
                accounts && accounts.length > 0
                  ? shortAddress(accounts[0])
                  : "Connect Wallet"
              }
              onClick={getAccounts}
              logo = "http://www.w3.org/2000/svg"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
