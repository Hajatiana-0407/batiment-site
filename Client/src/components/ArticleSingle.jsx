import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { MdOutlineDescription } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight, FaUserEdit } from 'react-icons/fa'
import { Navigate } from 'react-router-dom'
import { articles } from '../utils/data'
import { CiTimer } from 'react-icons/ci'

const ProjetDetails = () => {
  const { id } = useParams();
  const projetId = id - 1;
  let article;
  if ((articles.length) < id) {
    article = null;
    return <Navigate to={`/article/${articles.length}`} />
  }
  article = articles[projetId]

  // useEffect(() => {
  //     setActiveOnglet('article');
  // }, [])

  return (
    <section className='bg-background' id='article'>
      <div className='container mx-auto px-4 text-secondary pt-20 pb-10'>

        <div className={`w-full h-80 rounded relative overflow-hidden`} style={{
          backgroundImage: `url(../${article.image})`
        }}>
          {/* <div className='absolute top-0 left-0 right-0 bottom-0 backdrop-blur-[1.5px] bg-linear-to-r from-primary/30 via-transparent to-transparent  flex justify-start items-center p-5  '>
                        <div className='text-xl text-primary  bg-card border-ring border-2 rounded-full  shadow-xl shadow-background/20 font-heading py-2 px-3'>
                            {article.logo && (
                                isDark ? <img src={`../${article.logo.dark}`} alt="logo" className='h-10' />
                                    : <img src={`../${article.logo.light}`} alt="logo" className='h-10' />
                            )
                            }
                            {!article.logo && article.title}
                        </div>
                    </div> */}
          {id > 1 &&
            <NavLink
              to={`/article/${parseInt(id) - 1}`}
              className='text-2xl p-3 rounded-full bg-red-600 text-white hover:scale-105 transition-all duration-150 border] fixed bottom-1/2 left-4 xl:left-[calc((100%-1270px)/2+16px)]'
            >
              <FaChevronLeft />
            </NavLink>
          }
          {id < articles.length &&
            <NavLink
              to={`/article/${parseInt(id) + 1}`}
              className='text-2xl p-3 rounded-full bg-red-600 text-white hover:scale-105 transition-all duration-150 border] fixed bottom-1/2 right-4 xl:right-[calc((100%-1270px)/2+16px)]'
            >
              <FaChevronRight />
            </NavLink>
          }

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2  w-full my-2'>
          <div className='p-2 bg-white shadow-md rounded  md:col-span-2'>
            <div className='text-black  text-xl font-semi-bold pb-2'>
              <h2>{article.titre} </h2>
            </div>
            <div className='text-primary text-[#545454] pb-2'>
              <p>{article.description}</p>
            </div>
          </div>
          <div className='bg-white shadow-md p-2 '>
            <div className='flex flex-col gap-2  text-lg text-lime-800/70'>
              <div className='flex items-center gap-1 '>
                <span>
                  <FaUserEdit />
                </span>
                <span>
                  Auteur : 
                </span>
                <span className='text-black'>
                {article.auteur}
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <span>
                  <CiTimer />
                </span>
                <span>
                  Date : 
                </span>
                <span className='text-black'>
                {new Date(article.date).toLocaleDateString('FR-fr')}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjetDetails