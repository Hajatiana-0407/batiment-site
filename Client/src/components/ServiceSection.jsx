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
              <div className="fixed inset-0 opacity-70 bg-black backdrop-blur-[20px] z-40"></div>
              {/* ✅ Fenêtre popup affichée au-dessus */}
              <div className="fixed top-5 left-50 right-50 bottom-5 bg-white  shadow-2xl border border-gray-300 rounded-xl p-6 z-50 ">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-700">
                    {selectedItem.nombre}
                  </h3>
                  <button
                    className="text-red-600 text-2xl font-bold hover:text-red-800"
                    onClick={() => setSelectedItem(null)}
                  >
                    x
                  </button>
                </div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.nombre}
                  className="w-full h-120 object-cover rounded"
                />
                <p className="text-gray-600">{selectedItem.type}</p>
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

          <ul className="lg:grid grid-cols-2  gap-5 py-5">
            {liste.slice(0, 3).map((listes, index) => {
              const isSpecial = index === 0;
              return (
                <li
                  key={index}
                  onClick={() => setSelectedItem(listes)}
                  className="cursor-pointer  min-h-[280px] p-4 shadow-xl rounded-xl transition duration-300 hover:shadow-2xl  border-2 border-red-500"
                  style={{
                    backgroundColor: isSpecial
                      ? "rgb(247, 71, 71)"
                      : "rgb(245, 245, 245)",
                    color: isSpecial ? "white" : "rgb(51, 51, 51)",
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xl font-bold ">{listes.nombre}</div>
                      <div className="text-sm mb-1">{listes.type}</div>
                    </div>

                    <div className="relative w-full h-[250px] overflow-hidden">
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
          <ul className="flex flex-wrap justify-center gap-x-[8vw] gap-y-[2vw] pt-4 mx-auto bg-amber-300">
            {liste.slice(3).map((listes, index) => {
              const realIndex = index + 3;
              const isSpecial = realIndex === 5;
              return (
               <li
                  key={index}
                  onClick={() => setSelectedItem(listes)}
                  className="cursor-pointer  min-h-[280px] p-4 shadow-xl rounded-xl transition duration-300 hover:shadow-2xl  border-2 border-red-500"
                  style={{
                    backgroundColor: isSpecial
                      ? "rgb(247, 71, 71)"
                      : "rgb(245, 245, 245)",
                    color: isSpecial ? "white" : "rgb(51, 51, 51)",
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xl font-bold ">{listes.nombre}</div>
                      <div className="text-sm mb-1">{listes.type}</div>
                    </div>

                    <div className="relative w-full h-[250px] overflow-hidden">
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
