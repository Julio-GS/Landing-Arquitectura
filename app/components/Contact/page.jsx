export default function Contact() {
  return (
    <div
      class="flex justify-center items-center w-full h-full bg-white pt-14 pb-14"
      id="Contacto"
    >
      <div class="container mx-auto my-4 px-4 lg:px-20">
        <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div class="flex">
            <h1 class="font-bold font-serif uppercase text-5xl">
              Ponete <br /> en contacto
            </h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Nombre*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Apellido*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Numero*"
            />
          </div>
          <div class="my-4">
            <textarea
              placeholder="Mensaje*"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              class="uppercase text-sm font-bold tracking-wide  bg-[#333132] text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Enviar Mensaje
            </button>
          </div>
        </div>

        <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto  bg-[#333132] rounded-2xl">
          <div class="flex flex-col text-white">
            <h1 class="font-bold font-serif uppercase text-4xl my-4">
              Datos <br />
              de la Oficina
            </h1>
            <p class="text-gray-400">
              Queremos ser lo mas transparentes posibles, por eso te dejamos los
              datos de nuestra oficina para que por cualquier motivo puedas
              contactarnos.
            </p>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <div class="flex flex-col">
                <i class="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <h2 class="text-2xl">Oficina Principal</h2>
                <p class="text-gray-400">
                  Armenia 2114 <br />
                  Palermo, CABA
                </p>
              </div>
            </div>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <div class="flex flex-col">
                <i class="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <h2 class="text-2xl">Llamanos</h2>
                <p class="text-gray-400">Tel: +54 11 2595-8816</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
