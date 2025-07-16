import React from 'react'
const Navbar = () => {
  return (
    <>
    
    <nav className="flex items-center justify-between px-6 py-4 bg shadow-md">
    <div className="text-xl font-bold">Logo</div>

    <div>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-red-500 cursor-pointer">Accueil</li>
        <li className="hover:text-red-500 cursor-pointer">Blog</li>
        <li className="hover:text-red-500 cursor-pointer">Service</li>
        <li className="hover:text-red-500 cursor-pointer">Chantier</li>
        <li className="hover:text-red-500 cursor-pointer">À propos</li>
      </ul>
    </div>
    
    <div>
      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
        Contactez-nous
      </button>
    </div>  
  </nav>
  
  </>
  )
}

export default Navbar
