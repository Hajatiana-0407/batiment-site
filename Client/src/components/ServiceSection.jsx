import { useState } from "react";
import image1 from "../assets/zachary-ferguson-ykQ1HJYcQec-unsplash.jpg";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";

// Données des services
const liste = [
  {
    image: image1,
    nombre: "Architecture",
    type: "Contrary to popular belief, ipsum is not simply random",
  },
  {
    image: image1,
    nombre: "Urbanism",
    type: "Contrary to popular belief, ipsum is not simply random",
  },
  {
    image: image1,
    nombre: "Design",
    type: "Contrary to popular belief, ipsum is not simply random",
  },
  {
    image: image1,
    nombre: "Planning",
    type: "Contrary to popular belief, ipsum is not simply random",
  },
  {
    image: image1,
    nombre: "Communication",
    type: "Contrary to popular belief, ipsum is not simply random",
  },
  {
    image: image1,
    nombre: "Interior",
    type: "Contrary to popular belief, ipsum is not simply random",
  },
];

export function Service() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="container mx-auto">
      <div className="p-24 container mx-auto px-4">
        <div className="bg-white py-1 px-6 relative">
          {/* ✅ Fenêtre popup d'information au clic */}
          {selectedItem && (
            <>
              {/* ✅ Fond sombre et flou derrière la popup */}
              <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 "></div>
              {/* ✅ Fenêtre popup responsive centrée */}
              <div className="fixed top-25 left-1/2  transform -translate-x-1/2 bg-white shadow-2xl border border-gray-300 rounded-xl p-4 z-50 w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* En-tête avec titre et bouton de fermeture */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-700">
                    {selectedItem.nombre}
                  </h3>
                  <button
                    className="text-red-600 text-2xl font-bold hover:text-red-800"
                    onClick={() => setSelectedItem(null)}
                  >
                    ×
                  </button>
                </div>

                {/* Image */}
                <div className="w-full h-60 sm:h-80 mb-4 overflow-hidden rounded-xl bg-gray-100 flex justify-center items-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.nombre}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base sm:text-xl">
                  {selectedItem.type}
                </p>
              </div>
            </>
          )}

          {/* TITRE PRINCIPAL */}
          <h5 className=" text-gray-500 uppercase text-3xl tracking-widest">
            <span
              className="underline underline-offset-4 decoration-[3px] mt-5"
              style={{
                color: "rgb(115, 135, 48)",
                textDecorationLine: "line-through",
                textDecorationThickness: "9px",
              }}
            >
              - - - -
            </span>{" "}
            OUR SERVICE
          </h5>

          <h1 className=" font-sans mt-2 text-gray-500 text-5xl ">
            Explore Our <span>Services</span> :
          </h1>

          {/* SECTION ÉTUDES */}
          <h2
            className=" mt-5 font-bold text-2xl underline uppercase"
            style={{
              color: "rgb(115, 135, 48)",
              textDecorationThickness: "4px",
            }}
          >
            Études
          </h2>

          {/* LISTE DES SERVICES D'ÉTUDES */}
          {/* flex flex-wrap justify-center gap-x-[14vw] gap-y-[2vw] pt-4  */}

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
            {liste.slice(0, 3).map((listes, index) => {
              const isSpecial = index === 0;
              return (
                <li
                  key={index}
                  onClick={() => setSelectedItem(listes)}
                  className="cursor-pointer flex flex-col justify-between min-h-[300px] p-4 shadow-lg rounded-2xl transition duration-300 hover:shadow-2xl border-2"
                  style={{
                    backgroundColor: isSpecial
                      ? "rgb(247, 71, 71)"
                      : "rgb(245, 245, 245)",
                    color: isSpecial ? "white" : "rgb(51, 51, 51)",
                    borderColor: "rgb(247, 71, 71)",
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-bold pb-2">{listes.nombre}</h3>
                    <p className="text-lg pb-4">{listes.type}</p>
                  </div>

                  <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={listes.image}
                      alt={listes.nombre}
                      className="w-full h-full object-cover"
                    />
                    <span className="text-white flex justify-center items-center bg-lime-900 text-3xl absolute bottom-2 right-2 rounded-full w-12 h-12 shadow-lg">
                      <FaArrowRight className="rotate-315" />
                    </span>
                    <div
                      className="absolute bottom-0 right-0"
                      style={{
                        width: "0",
                        height: "0",
                        borderRight: `115px solid ${
                          isSpecial ? "rgb(247, 71, 71)" : "rgb(245, 245, 245)"
                        }`,
                        borderTop: "118px solid transparent",
                      }}
                    ></div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* SECTION RÉALISATIONS */}
          <h2
            className=" mt-10 font-bold text-2xl underline uppercase  "
            style={{
              color: "rgb(115, 135, 48)",
              textDecorationThickness: "4px",
            }}
          >
            Réalisations
          </h2>

          {/* LISTE DES RÉALISATIONS */}
          <ul className="lg:grid grid-cols-3  gap-8 py-5">
            {liste.slice(3).map((listes, index) => {
              const realIndex = index + 3;
              3;
              const isSpecial = realIndex === 5;
              return (
                <li
                  key={index}
                  onClick={() => setSelectedItem(listes)}
                  className="cursor-pointer  min-h-[280px] m-6 p-4 shadow-xl rounded-xl transition duration-300 hover:shadow-2xl  border-2 border-red-500"
                  style={{
                    backgroundColor: isSpecial
                      ? "rgb(247, 71, 71)"
                      : "rgb(245, 245, 245)",
                    color: isSpecial ? "white" : "rgb(51, 51, 51)",
                  }}
                >
                  <div className="flex flex-col justify-between h-full ">
                    <div>
                      <div className="text-2xl font-bold pb-2">
                        {listes.nombre}
                      </div>
                      <div className="text-xl mb-1 pb-3">{listes.type}</div>
                    </div>

                    <div className="relative w-full h-[250px] overflow-hidden rounded-2xl">
                      <img
                        src={listes.image}
                        alt={listes.nombre}
                        className="inset-0 w-full  object-cover z-10"
                      />
                      <span className="text-white flex justify-center items-center  bg-lime-900 text-4xl absolute bottom-0 z-20 right-0 rounded-full w-15 h-15">
                        <FaArrowRight className="rotate-315" />
                      </span>
                      <div
                        className={`w-30 h-30 absolute bottom-0 right-0`}
                        style={{
                          borderRight: `115px solid ${
                            isSpecial
                              ? "rgb(247, 71, 71) "
                              : "rgb(245, 245, 245)"
                          }`,
                          borderTop: "118px solid transparent",
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
