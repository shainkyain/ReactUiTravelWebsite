import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'
// import { FaFacebook,FaInstagram , FaTwitter } from 'react-icons/fa'
// import {  TiSocialPintrest } from 'react-icons/ti'
const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2 '>
        <div className='m-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4 '>
            <div>
                <h6 className="font-bold uppercase pt-2">Solutions</h6>
                <ul>
                    <li>Travel</li>
                    <li>Booking</li>
                    <li>Flights</li>
                    <li>Cruises</li>
                    <li>Ground</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold uppercase pt-2"> Support</h6>
                <ul>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Tours</li>
                    <li>Refunds</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold uppercase pt-2"> Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jpbs</li>
                    <li>Press</li>
                    <li>Partners</li>

                </ul>
            </div><div>
                <h6 className="font-bold uppercase pt-2"> Legal</h6>
                <ul>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Policies</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase '>Subscribe To our NewsLetters</p>
                <p className='py-4'>The Latest deals, articles and resources sent to your Inbox Weekly</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='enter Email' />
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col m-w-[1400px] px-2 p-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2024 Experiences, LLc, All rights Reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TiSocialPinterest size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer