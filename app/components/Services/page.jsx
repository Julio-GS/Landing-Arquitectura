import Image from "next/image";
import img from "./house-1.jpg";
export default function Services() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-gray-400 font-serif from-inherit font-extralight text-2xl pt-4 uppercase tracking-wide">
          Proyectos
        </h1>
        <h2 className=" font-serif text-5xl pt-4 text-[#333132] uppercase tracking-wider">
          Nuestras Casas
        </h2>
        <p className="font-light font-serif tracking-wide from-inherit leading-loose w-[40%] pt-4 text-wrap text-center	 ">
          Cada casa y cada proyecto es una historia que fue y es pensada en su
          unicidad. Buscamos generar en nuestras obras un salto cualitativo
          hacia una riqueza espacial, material y programática. Nuestros
          proyectos están en constante cambio, adaptándose a las necesidades y
          al lugar en donde son construidos.
        </p>
      </div>
      <section className="w-[100%]  flex flex-row pt-1" id="Servicios">
        <h1 className="font-serif text-5xl text-[#333132] uppercase w-[50%] flex items-center justify-center">
          Casa Barranquilla
        </h1>
        <Image src={img} className="w-[50%] h-[100%]" alt="Casa Barranquilla" />
      </section>
      <section className="w-[100%]  flex flex-row pt-1" id="Servicios">
        <Image src={img} className="w-[50%] h-[100%]" alt="Casa Barranquilla" />
        <h1 className="font-serif text-5xl text-[#333132] uppercase w-[50%] flex items-center justify-center">
          Casa Barranquilla
        </h1>
      </section>
      <section className="w-[100%]  flex flex-row pt-1" id="Servicios">
        <h1 className="font-serif text-5xl text-[#333132] uppercase w-[50%] flex items-center justify-center">
          Casa Barranquilla
        </h1>
        <Image src={img} className="w-[50%] h-[100%]" alt="Casa Barranquilla" />
      </section>
    </div>
  );
}
