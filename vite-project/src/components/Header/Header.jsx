import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";


export default function Header() {

  const productsCount = useSelector(state =>{

    return state.cart.reduce((accumulator,currenValue)=>accumulator+currenValue.quantity,0)
  })


  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="shrink-0">
            <img  src="src\assets\logo (1).png" alt="Logo" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex flex-1 justify-center space-x-10 lg:space-x-16">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-base font-medium transition-all duration-200 pb-6
                 ${isActive ? "text-green-600" : "text-gray-600 hover:text-green-600"}`
              }
            >
              {({ isActive }) => (
                <>
                  Main Page
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-green-600 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `relative text-base font-medium transition-all duration-200 pb-6
                 ${isActive ? "text-green-600" : "text-gray-600 hover:text-green-600"}`
              }
            >
              {({ isActive }) => (
                <>
                  All products
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-green-600 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          </nav>
          <div className="shrink-0">
            <NavLink 
            to="/cart"
            className="shrink-0">
              ({productsCount})
            <ShoppingCartOutlined 
            className="text-2xl text-gray-700 hover:text-green-600 cursor-pointer transition-colors duration-200" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}