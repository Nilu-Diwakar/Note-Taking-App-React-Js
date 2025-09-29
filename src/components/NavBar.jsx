import React from 'react'
import { NavLink } from 'react-router-dom'
import icons from "../icons/index"
import Icons from '../icons/index'

function NavBar() {
  return (
    // <nav className='w-full fixed bottom-0 px-4 py-3 bg-neutral-0 lg:hidden'>
    <nav className='w-full fixed bottom-0 px-4 py-1 bg-neutral-0 lg:hidden'>
        <ul className='grid grid-cols-5'>
            <li>
                <NavLink to={"/"} className={({ isActive }) => `flex flex-col justify-center items-center py-2 ${isActive? "bg-neutral-200" : ""}`}>
                    {/* <img src={icons.home} alt="home-icon" /> */}
                    <Icons.Home />
                    <p className='hidden md:block text-neutral-600 text-xs font-normal'>Home</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={`/?search=${true}`} className="flex flex-col justify-center items-center py-2">
                    {/* <img src={icons.search} alt="home-icon" /> */}
                    <Icons.Search />
                    <p className='hidden md:block text-neutral-600 text-xs font-normal'>Search</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/archives"} className={({ isActive }) => `flex flex-col justify-center items-center py-2 ${isActive? "bg-neutral-200" : ""}`}>
                    {/* <img src={icons.archive} alt="home-icon" /> */}
                    <Icons.Archive />
                    <p className='hidden md:block text-neutral-600 text-xs font-normal'>Archive</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={`/?tag=${true}`} className="flex flex-col justify-center items-center py-2">
                    {/* <img src={icons.tag} alt="home-icon" /> */}
                    <Icons.Tag />
                    <p className='hidden md:block text-neutral-600 text-xs font-normal'>Tag</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/settings"} className={({ isActive }) => `flex flex-col justify-center items-center py-2 ${isActive? "bg-neutral-200" : ""}`}>
                    {/* <img src={icons.setting} alt="home-icon" /> */}
                    <Icons.Setting />
                    <p className='hidden md:block text-neutral-600 text-xs font-normal'>Setting</p>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
