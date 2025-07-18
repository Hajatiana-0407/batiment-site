import React from 'react'
import SubTitle from './ui/SubTitle'
import { FaEye, FaUserEdit } from 'react-icons/fa';
import { CiTimer } from "react-icons/ci";
import { articles } from '../utils/data';
import { NavLink } from 'react-router-dom';



const ArticleSection = () => {
    return (
        <section className='article-section bg-gray-50 min-h-100 py-10 '>
            <div className='container mx-auto px-4 space-y-5'>
                <SubTitle title='Articles recents' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {articles.map((article, key) => (
                        <div key={key} className='bg-white border border-gray-100 p-4 rounded-md shadow-md space-y-2 hover:shadow-xl hover:scale-102 transition-all duration-200 group'>
                            <div className='bg-gray-200 w-full h-50 rounded overflow-hidden flex justify-center items-center'>
                                <img  className='min-w-full min-h-full group-hover:scale-110 transition-all duration-400' src={ article.image ? article.image : ''} alt="image"/>
                            </div>
                            <div className='flex gap-5 text-md text-lime-800/70'>
                                <div className='flex items-center gap-1 '>
                                    <span>
                                        <FaUserEdit />
                                    </span>
                                    {article.auteur}
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span>
                                        <CiTimer />
                                    </span>
                                    {new Date(article.date).toLocaleDateString('FR-fr')}
                                </div>

                            </div>
                            <div className='text-lg font-semibold text-[#202020]'>
                                <h5>{article.titre} </h5>
                            </div>
                            <div className='text-[#646464]'>
                                <p className='overflow-hidden text-ellipsis line-clamp-4'>
                                    {article.description}
                                </p>
                            </div>
                            <div className='flex justify-end'>
                                <NavLink to={`/article/${ article.id }`} className="bg-red-600 flex gap-2 items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700 cursor-pointer transition">
                                    <span>
                                        < FaEye />
                                    </span>
                                    Voire plus
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ArticleSection