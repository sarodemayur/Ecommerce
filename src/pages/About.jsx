import React from 'react'

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt=''
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
               <i>Best Place for Online Shopping</i>
            </h2>
            <p className="mt-6 text-gray-600">
            You are at the best place for online shopping here you will get Quality Products 
             Trending products in Market at Reasonable price. 
            </p>
            <p className="mt-4 text-gray-600">
            Yow will get Fastest delivery of your product on our platform. seven days return policy
              Best Products. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
