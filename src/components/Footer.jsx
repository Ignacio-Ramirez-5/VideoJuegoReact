const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-purple-800 to-pink-500 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">GameZone</h3>
            <p className="text-sm opacity-75">Creando experiencias únicas desde 2025</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white transition duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="block hover:text-white transition duration-300">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-600 text-center">
          <p className="text-sm opacity-75">© 2025. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

