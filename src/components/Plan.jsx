import React from 'react'

const Plan = () => {
  return (
    <div className='m-w-[1400px] m-auto py-15 px-4 grid lg:grid-cols-2 gap-4 '>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
      <img className='row-span-3 object-cover w-full h-full p-2 ' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="/" />
      <img className='row-span-2 object-cover w-full h-full p-2' src=" https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
      <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="/" />
      <img className='row-span-3 object-cover w-full h-full p-2' src=" https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
      <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="/" />
      </div>
      {/* Right side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold' >Plan Your Next Trip </h3>
        <p  className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sequi!</p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ipsa temporibus nobis rerum earum quis similique aut ratione.</p>
    
      <div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
      </div>
      </div>
    </div>
  )
}

export default Plan