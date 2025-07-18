import React from 'react'

const videoData = [
  {
    title: "CHANTIER DE TRAVAIL :",
    description:
      "Description  de l'étude des travaux lorem lorem lorem lorem lorem lorem lorem",
    image: "./src/components/images/image_1.jpg", // image dans /public/images/
    position: "left", // pour la disposition
    video: "/videos/sakamotoday-3.mp4"

  },
  {
    title: "ETUDE DE MARCHER :",
    description:
      "Description  de l'étude des travaux lorem lorem lorem lorem lorem lorem lorem",
    image: "./src/components/images/service.jpg",
    position: "right",
    video: "/videos/sakamotoday-3.mp4"
  },
];

function VideoSecction() {
  return (
    <section className='bg-[#f44336] ' >
      <div className="lg:grid md:grid-cols-2 gap-10 p-4  max-w-[1400px] mx-auto py-5">
        {/* Video */}
        {/* <div className="w-full flex items-center border justify-center">
          <div className='bg-white p-4 rounded-3xl'>
            <video className='max-w-sm  rounded-t-2xl' src={videoData[0].video} controls />
            <div className='bg-white p-5'></div>
          </div>
        </div> */}
        {/* Texte Droite */}
        {/* <div className="flex items-center justify-center">
          <div className="w-full text-white">
            <h2 className="lg:text-5xl  md:text-3xl text-2xl souligne1" >{videoData[0].title}</h2>
            <p className="text-2xl p-6 ">{videoData[0].description}</p>
          </div>

        </div> */}
        {/* Texte Gauche */}
        {/* <div className="flex items-center justify-center">
          <div className="w-full text-white">

            <h2 className='lg:text-5xl md:text-3xl text-2xl souligne2'>{videoData[1].title}</h2>
            <p className='text-2xl p-6'>{videoData[1].description}</p>
          </div  >
        </div  > */}
        {/* Video 2  */}
        {/* <div className="w-full flex items-center justify-center">
          <div className='bg-white p-4 rounded-3xl'>
            <video className='max-w-sm rounded-t-2xl' src={videoData[1].video} controls width="100%"></video>
            <div className='bg-white p-5'></div>
          </div>
        </div> */}

        <div className=' space-y-20'>
          {/* Video 1 */}
          <div className="">
            <div className='bg-white p-4 max-w-110 rounded-3xl flex flex-col items-center justify-center'>
              <video className='max-w-sm  rounded-t-2xl' src={videoData[0].video} controls />
              <div className='bg-white p-5'></div>
            </div>
          </div>
          {/* Texte Gauche */}
          <div className="flex items-center justify-center">
            <div className="w-full text-white">
              <h2 className="lg:text-5xl  md:text-3xl text-2xl souligne2" >{videoData[1].title}</h2>
              <p className="text-2xl p-6 ">{videoData[1].description}</p>
            </div>

          </div>
        </div>
        <div className='space-y-20'>
          {/* Texte Droite */}
          <div className="flex items-center justify-center">
            <div className="w-full text-white">
              <h2 className="lg:text-5xl  md:text-3xl text-2xl souligne1" >{videoData[0].title}</h2>
              <p className="text-2xl p-6 ">{videoData[0].description}</p>
            </div>

          </div>

          {/* Video 2 */}
          <div className="">
            <div className='bg-white p-4 max-w-110 rounded-3xl flex flex-col items-center justify-center'>
              <video className='max-w-sm  rounded-t-2xl' src={videoData[0].video} controls />
              <div className='bg-white p-5'></div>
            </div>
          </div>


        </div>


      </div>
    </section>
  )
}

export default VideoSecction
