export default function Footer() {
  return (
    <footer class="bg-[#333132]">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 justify-center">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">
              Compañia
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  Home
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Nosotros
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Servicios
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
              Help center
            </h2>
            <ul class=" text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Whatsapp
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Twitter
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Facebook
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Contactanos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
              Legal
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Politicas de Privacidad
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terminos &amp; Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-4 py-6 bg-[#333132] md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Julio Gomez</a>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
