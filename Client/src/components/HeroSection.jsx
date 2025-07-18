import React, { useEffect, useState } from 'react'

const HeroSection = () => {
  const images = [
    '/assets/model-1.jpg',
    '/assets/model-2.jpg',
    '/assets/model-3.jpg',
    '/assets/stretched-1366-768-1321414.png'
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const texts = [
    "Transformez votre espace avec notre expertise moderne",
    "Lorem ipsum net mit r adipisicing elit. Odio, quidem temporibus "
  ]

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length)
    }, 3750)
    return () => clearInterval(imageInterval)
  }, [])

  useEffect(() => {
    const textInterval = setInterval(() => {
      setFade(false) 
      setTimeout(() => {
        setTextIndex(prev => (prev + 1) % texts.length)
        setFade(true) 
      }, 500) 
    }, 3750) 

    return () => clearInterval(textInterval)
  }, [])

  return (
    <>
      <div
        className="bg-home min-h-screen flex items-center justify-center px-4 sm:px-10 py-8 sm:py-12"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: 'background-image 4s ease-in-out'
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full px-2 sm:px-4 lg:px-8 order-2 lg:order-1 mt-8 lg:mt-0">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight transition-opacity duration-500 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {texts[textIndex].split('<br>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br className="hidden sm:block" />
                </React.Fragment>
              ))}
            </h1>

            <p className="text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quidem temporibus eligendi tempore,
              reiciendis labore eum tempora nostrum sint cumque sed omnis id, asperiores fugiat obcaecati aperiam
              eaque placeat blanditiis!
            </p>

              <div className="flex flex-col sm:flex-row items-center justify-evenly w-full mt-4 sm:mt-6 gap-4 sm:gap-0">
                  <button className="bg-white text-red-600 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-gray-100 transition text-base sm:text-lg transform scale-100 sm:scale-[1.35] w-[90%] sm:w-auto">
                      Qui nous sommes ?
                  </button>
                  <button className="bg-red-600 text-white font-semibold px-4 py-2 sm:px-8 sm:py-4 rounded-full hover:bg-red-700 transition text-base sm:text-lg transform scale-100 sm:scale-[1.35] w-[90%] sm:w-auto">
                      Contact
                  </button>
              </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 order-1 lg:order-2">
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-pic bg-center bg-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
