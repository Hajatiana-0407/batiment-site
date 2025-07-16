import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const images = [
    '/assets/model-1.jpg',
    '/assets/model-2.jpg',
    '/assets/model-3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
        (prevIndex+1) %images.length
        )
    }, 4000);
  })
  return (
    <>
        <div className='bg-home flex w-full h-screen'>
            <div className='w-1/2 p-20 m-10'>
                <p className="text-4xl font-bold text-white">Transformez votre espace</p> <br />
                <p className="text-4xl font-bold text-white">avec notre expertise</p> <br />
                <p className="text-4xl font-bold text-white">moderne</p> <br /> <br />
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quidem temporibus eligendi tempore, reiciendis labore eum tempora nostrum sint cumque sed omnis id, asperiores fugiat obcaecati aperiam eaque placeat blanditiis!</p>
                <div className='flex p-4 m-4'>
                    <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition m-2">Qui nous sommes</button>
                    <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition">Contact</button>
                </div>
            </div>
          <div className='w-1/2 pt-28'>
              <div className='bg-pic'></div>
          </div>
    </div>
    </>
  )
}

export default HeroSection

