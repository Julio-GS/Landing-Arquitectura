import Image from "next/image";
import img from "./company.jpg";
export default function Company() {
  return (
    <section className="w-[100%] h-[700px] flex flex-row " id="Servicios">
      <div className="w-[50%] h-[100%] items-center flex  bg-[#333132]">
        <div className="pl-10">
          <h3 className="text-gray-400 font-serif from-inherit font-extralight text-1xl pt-4">
            NUESTRO ESTUDIO
          </h3>
          <h2 className="text-white font-serif text-7xl pt-4">
            +20 Años <br></br>de trayectoria
          </h2>
          <p className="text-white font-serif tracking-wide w-[60%] pt-4 text-wrap">
            EN EL AREA DE PROYECTO, DIRECCION Y CONSTRUCCIÓN DE OBRA
          </p>
          <p className="text-white font-light font-serif tracking-wide from-inherit leading-loose w-[60%] pt-4 text-wrap">
            Desde nuestros comienzos, siempre miramos hacia adelante. Nos
            inspira construir un futuro auténtico. Durante este camino nos
            enfocamos en fundar los pilares de lugares exclusivos, que traen
            recuerdos únicos.
          </p>
          <button
            type="button"
            class="text-white focus:outline font-medium  text-sm pr-5 py-2.5 text-left inline-flex items-center"
          >
            Leer mas
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      <Image src={img} className="w-[50%] h-[100%]" alt="Company section" />
    </section>
  );
}
