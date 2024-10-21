
import Link from 'next/link'
import { Search, User, ShoppingCart } from 'lucide-react'
import { cookies } from 'next/headers';
import logo from '../../../img/TechNyx.png'

const NavBar = () => {

  const cookieStore = cookies()
  const userData = JSON.parse(cookieStore.get('userData')?.value ?? "{}")
  
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <Link href="/" className="flex-shrink-0">
            <img className="h-8 w-auto" src={logo.src} alt="TechNyx" />
          </Link>
          <button className=" flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-gray-50 hover:text-black">
            Categories
          </button>
          <div className="flex-1 max-w-xs mx-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className='flex flex-row mt-4'>          
            {
              !userData.token ? (
                <>
                  <Link href={"/login"} className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-blue-600 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-blue-700">
                    <p>Login</p>
                  </Link>
                  <Link href={"/register"} className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-gray-50 hover:text-black">
                    Register
                  </Link>
                </>
              ) : ( 
                <>           
                <Link href={"/dashboard"} className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-gray-50 hover:text-black">
                  <User aria-hidden="true" />
                </Link>
                <Link href={"/cart"} className="mr-2 mb-4 items-center justify-center rounded-md border py-2 px-8 text-gray-500  transition duration-150 ease-in-out hover:translate-y-1  hover:bg-gray-50 hover:text-black cursor-pointer">
                  <ShoppingCart aria-hidden="true" />
                </Link>
                </>
                )
            }
          </div>
        </div>
      </div>
    </nav>
  )
};
export default NavBar