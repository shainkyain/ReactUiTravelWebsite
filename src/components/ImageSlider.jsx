import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
 const slides = [
        {
        url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Paneer',
        },
        {
        url: ' https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Curry',
        },
        {
        url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'Salida',
        },
        {
        url: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Pasta',
        },
 ]

 const [currentIndex, setCurrentIndex] = useState(0);
 const prevSlide =() =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex); 
 }
 const nextSlide =() =>{
    const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex); 
 }
 const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
 }
    return (
    <div className='m-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'> 
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage : `url(${slides[currentIndex].url})`}}>
        </div>
        {/* left arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide , slideIndex)=>(
                <div className='text-2xl cursor-pointer hover:text-3xl' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <RxDotFilled />
                </div>    
            ) ) }
        </div>
    </div>
  )
}

export default ImageSlider