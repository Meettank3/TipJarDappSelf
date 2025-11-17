import React from 'react'
import MetricCard from './MetricCard'
import github_logo from '../assets/github-white-icon.png'
import linkedin_logo from '../assets/linkedin.png'
import x_logo from '../assets/x.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-12 " >
      <div className="text-grey-700 text-size-26px flex flex-rows justify-center items-center gap-10 p-3 h-40px md:h-50px flex flex-cols justify-center items-center">
        {/* GitHub Cards */}
        <div >
          <MetricCard
            children={
              <a href="https://github.com/Meettank3">
                <img src={github_logo} />
              </a>
            }
          />
        </div>
        <div>
           <MetricCard
            children={
              <a href="https://www.linkedin.com/in/meet-tank3/">
                <img src={linkedin_logo} />
              </a>
            }
          />
        </div>
        <div>
          <MetricCard
            children={
              <a href="https://x.com/meettank33">
                <img src={x_logo} />
              </a>
            }
          />
        </div>
      </div>
        <p className='text-gray-400 mb-3 text-size-26px flex flex-rows justify-center items-center gap-10 p-5 h-40px'>
          Contract Address: 0x12300000000000000000000abc
        </p>
          <p className=" text-gray-400 mb-3 flex justify-center items-center" >
            © Made with Ethereum ❤️.
          </p>
    </footer>
  )
}

export default Footer
