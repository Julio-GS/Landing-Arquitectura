import Image from "next/image";
import img from "./about.png";
export default function About() {
  return (
    <section className="w-[100%] h-[700px] flex flex-row " id="Nosotros">
      <Image src={img} className="w-[50%] h-[100%]" alt="Logo principal" />
      <div className="w-[50%] h-[100%] items-center flex">
        <div className="pl-8">
          <h3 className="text-gray-600 font-mono from-inherit font-extralight pb-4">
            Nosotros
          </h3>
          <h2 className="font-thin font-mono from-inherit text-7xl pb-4">
            Quiénes somos
          </h2>
          <p className="font-light font-serif	tracking-wide from-inherit leading-loose w-[60%] pt-4 text-wrap">
            Somos un estudio de arquitectura que crea diseños originales y
            contemporáneos. Cada proyecto es único y persigue objetivos
            sustentables con el fin de mejorar la calidad de vida de las
            personas. Exploramos alternativas de diseño y constructivas que nos
            permiten materializar las ideas.
          </p>
        </div>
      </div>
    </section>
  );
}
