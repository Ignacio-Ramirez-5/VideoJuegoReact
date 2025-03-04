import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src="/logo.png"
              className="h-12 w-12 rounded-full border-2 border-white shadow-lg transform hover:rotate-12 transition-all duration-300"
              alt="Logo"
            />
            <span className="ml-3 text-2xl font-bold text-white">GameZone</span>
          </div>
          <div className="flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative overflow-hidden px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out ${
                  isActive ? "text-purple-700 bg-white" : "text-white hover:text-purple-700 hover:bg-white"
                }`
              }
            >
              
              {({ isActive }) => (
                <>
                  Home
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  ></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/Games"
              className={({ isActive }) =>
                `relative overflow-hidden px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out ${
                  isActive ? "text-purple-700 bg-white" : "text-white hover:text-purple-700 hover:bg-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Videojuegos
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  ></span>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

