import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiShopee } from "react-icons/si";
import { myContext } from '../pages/MainContext';
import { PiShoppingCartDuotone } from "react-icons/pi";



export default function Header() {

    let {cart,setCart} = useContext(myContext)
 
    let [menuOpen,setOpenMenu] = useState(false)
    return (
        <header className='sticky z-40 top-0 bg-gray-700 shadow-lg lg:py-[0px] py-[5px]'>


            <nav className="bg-gray-700 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center flex gap-2 items-center text-2xl font-semibold whitespace-nowrap text-white tracking-widest"><SiShopee />Shopping</span>
                    </a>
                    <button onClick={()=>setOpenMenu(!menuOpen)} data-collapse-toggle="#navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="#navbar-default" aria-expanded={menuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div id="navbar-default" className={`${menuOpen ? "block" : "hidden"}  md:flex w-full md:w-auto`}>
                        <ul className="font-medium flex flex-col p-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                                <Link to={'/'} onClick={()=>setOpenMenu(false)} className="block py-2 px-3 font-semibold rounded-sm md:bg-transparent  md:p-0 text-white " aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to={'product'} onClick={()=>setOpenMenu(false)} className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:text-white font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</Link>
                            </li>
                            <li>
                                <Link to={'cart'} onClick={()=>setOpenMenu(false)} className="flex items-center gap-[5px] py-2 px-3 hover:text-white font-semibold text-gray-300 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 md:dark:hover:bg-transparent relative">Cart <PiShoppingCartDuotone className='text-2xl'/><span className='hidden lg:block absolute right-[-1px] top-[-6px] bg-yellow-300 px-[4px] py-[0px] rounded-[50%] text-gray-900 text-[10px]'>{cart.length}</span></Link>
                            </li>
                            <li>
                                <Link to={'/register'} onClick={()=>setOpenMenu(false)} className="block py-2 px-3 hover:text-white font-semibold text-gray-300 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0   md:dark:hover:bg-transparent">Register</Link>
                            </li>
                            <li>
                                <Link to={'/login'} onClick={()=>setOpenMenu(false)} className="block py-2 px-3 text-gray-300 rounded-sm  md:border-0 hover:text-white font-semibold md:p-0 dark:text-white md:dark:hover:text-blue-500  md:dark:hover:bg-transparent">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
