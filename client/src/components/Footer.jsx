import React from 'react'
import MetricCard from './MetricCard'
import react from '../assets/react.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-12 " >
      <div className="text-grey-700 text-size-26px flex flex-rows justify-center items-center gap-10 p-3 h-40px">
        {/* GitHub Cards */}
        <div >
          <MetricCard
            children={
              <a href="https://github.com/Meettank3">
                <img src={react} />
              </a>
            }
          />
        </div>
        <div>
           <MetricCard
            children={
              <a href="https://github.com/Meettank3">
                <img src={react} />
              </a>
            }
          />
        </div>
        <div>
          <MetricCard
            children={
              <a href="https://github.com/Meettank3">
                <img src={react} />
              </a>
            }
          />
        </div>
      </div>
        <p className='text-gray-400 mb-3 text-size-26px flex flex-rows justify-center items-center gap-10 p-5 h-40px'>
          Contract 0x12300000000000000000000abc
        </p>
          <p className=" text-gray-400 mb-3 flex justify-center items-center" >
            © TipDipJar. All rights reserved.
          </p>
    </footer>
  )
}

export default Footer
