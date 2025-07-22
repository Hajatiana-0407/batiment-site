import React from 'react'
import SubTitle from './ui/SubTitle'

const articles = [
    {
        id: 1,
        titre: "Les fondations : étape cruciale de toute construction",
        auteur: "Jean Dupont",
        date: "2025-07-10",
        resume: "Découvrez pourquoi des fondations solides sont essentielles pour la stabilité d’un bâtiment.",
        description: `Les fondations assurent la stabilité de la structure d’un bâtiment. Selon le type de sol, on peut opter pour des fondations superficielles ou profondes. 
    Une étude de sol est indispensable avant tout projet. Une erreur dans cette étape peut provoquer des affaissements, des fissures et compromettre toute la construction.`,
        image: "images/fondations.jpg",
        tags: ["fondations", "structure", "béton"]
    },
    {
        id: 2,
        titre: "Isolation thermique : comment réduire vos factures d’énergie",
        auteur: "Sophie Martin",
        date: "2025-07-12",
        resume: "L’isolation est la clé pour une maison économe et confortable toute l’année.",
        description: `L’isolation thermique permet de conserver la chaleur en hiver et la fraîcheur en été. Elle peut être réalisée par l'intérieur ou l'extérieur avec des matériaux comme la laine de verre, la ouate de cellulose ou le liège. 
    Un logement bien isolé réduit les besoins en chauffage et améliore le confort.`,
        image: "images/isolation.jpg",
        tags: ["isolation", "énergie", "écologie"]
    },
    {
        id: 3,
        titre: "Quels matériaux choisir pour construire durable ?",
        auteur: "Ali Raharison",
        date: "2025-07-14",
        resume: "Découvrez les matériaux de construction écologiques les plus utilisés aujourd’hui.",
        description: `Construire de manière durable implique de choisir des matériaux respectueux de l’environnement comme le bois certifié, la brique en terre crue, le chanvre ou la paille. 
    Ces matériaux offrent de bonnes performances thermiques tout en ayant une faible empreinte carbone.`,
        image: "images/materiaux-eco.jpg",
        tags: ["écologie", "matériaux", "durable"]
    },
    {
        id: 4,
        titre: "Toiture : erreurs courantes à éviter lors d’une rénovation",
        auteur: "Claire Bernard",
        date: "2025-07-15",
        resume: "Rénover une toiture demande précision et savoir-faire. Voici les pièges à éviter.",
        description: `Lors d’une rénovation de toiture, il est essentiel de vérifier la charpente, l’isolation et l’étanchéité. 
    Ne pas remplacer les éléments défectueux, négliger les normes ou sous-estimer la ventilation peut causer des infiltrations ou de la moisissure. Faites appel à un couvreur qualifié.`,
        image: "images/toiture.jpg",
        tags: ["rénovation", "toiture", "conseils"]
    }
];


const ArticleSection = () => {
    return (
        <section className='article-section bg-gray-50 min-h-100 py-5' id='blog'>
            <div className='container mx-auto space-y-5'>
                <SubTitle title='Articles recents' />   
                <div className='grid grid-cols-3 gap-5'>
                    { articles.map(( article , key ) => (
                        <div key={key} className='bg-white border border-gray-100 p-4 rounded-md shadow-md space-y-2'>
                            <div className='bg-gray-200 w-full h-40'>

                            </div>
                            <div className='text-lg font-semibold text-[#202020]'>
                                <h5>{ article.titre } </h5>
                            </div>
                            <div  className='text-[#646464]'>
                                <p className='overflow-hidden text-ellipsis line-clamp-4'>
                                    { article.description}
                                </p>
                            </div>
                            <div className='flex justify-end'>
                                    <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition">Voire plus</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ArticleSection