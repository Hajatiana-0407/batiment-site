import React from 'react'
const Navbar = () => {
  return (
    <>
    <nav className="bg-[#B7D3BF] shadow-md py-3 sm:py-4">
  <div className="container mx-auto px-4 flex items-center justify-between">
    
    {/* Logo - Taille ajustée pour mobile */}
    <div className="text-xl sm:text-2xl font-bold text-red-600">Logo</div>

    {/* Navigation desktop - Inchangée */}
    <ul className="hidden md:flex space-x-4 lg:space-x-6 text-gray-700 font-medium">
      <li className="hover:text-red-500 cursor-pointer px-1 py-2">Accueil</li>
      <li className="hover:text-red-500 cursor-pointer px-1 py-2">Blog</li>
      <li className="hover:text-red-500 cursor-pointer px-1 py-2">Service</li>
      <li className="hover:text-red-500 cursor-pointer px-1 py-2">Chantier</li>
      <li className="hover:text-red-500 cursor-pointer px-1 py-2">À propos</li>
    </ul>

    {/* Bouton contact desktop - Inchangé */}
    <div className="hidden md:block">
      <button className="bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-red-700 transition text-sm sm:text-base">
        Contactez-nous
      </button>
    </div>

    {/* Menu mobile - Optimisé */}
    <div className="md:hidden flex items-center space-x-4">
      {/* Bouton menu hamburger - Taille ajustée */}
      <button className="p-1">
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

  </div>
</nav>
  </>
  )
}

export default Navbar
