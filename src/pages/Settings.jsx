import React from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom'
import icons from '../icons';
import Icons from '../icons';

function Settings() {
    const outlet = useOutlet();

  return (
    <div className='w-full h-full flex flex-col lg:flex-row'>
        {/* Left Side */}
        <div className={`flex flex-col gap-2 px-4 md:px-8 lg:px-4 py-6 lg:py-5 min-w-[240px] bg-neutral-0 border-r border-neutral-200`}>
          <p className='mb-4 text-neutral-950 text-2xl font-bold lg:hidden'>Settings</p>
          <ul className='border-b border-[#e0e4ea] pb-3'>
            <li>
              <NavLink to={"/settings/color-theme"} className={({ isActive }) =>`w-full flex gap-2 items-center overflow-hidden rounded-md p-2 text-left outline-none h-8 text-sm ${isActive?"bg-neutral-200" : ""}`}>
                {
                  ({ isActive }) => (
                    <>
                      {/* <img src={icons.sun} alt="sun-icon" className="w-4" /> */}
                      <Icons.Sun className="w-4"/>
                      <p className='text-neutral-950 text-sm font-medium'>Color Theme</p>
                      {/* <img src={icons.arrowRight} alt="right-arrow-icon" className={`w-4 ml-auto ${isActive ? "block" : "hidden"}`}/> */}
                      <Icons.ArrowRight className={`ml-auto w-4 ${isActive ? "block" : "hidden"}`}/>
                    </>
                  )
                } 
              </NavLink>
            </li>
            <li>
              <NavLink to={"/settings/font-theme"} className={({ isActive }) =>`w-full flex gap-2 items-center overflow-hidden rounded-md p-2 text-left outline-none h-8 text-sm ${isActive?"bg-neutral-200" : ""}`}>
                {
                  ({ isActive }) => (
                    <>
                      {/* <img src={icons.font} alt="font-icon" className="w-4" /> */}
                      <Icons.Font className="w-4"/>
                      <p className='text-neutral-950 text-sm font-medium'>Font Theme</p>
                      {/* <img src={icons.arrowRight} alt="right-arrow-icon" className={`w-4 ml-auto ${isActive ? "block" : "hidden"}`}/> */}
                      <Icons.ArrowRight className={`ml-auto w-4 ${isActive ? "block" : "hidden"}`}/>
                    </>
                  )
                } 
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className={`px-4 md:px-8 py-6 pb-20 lg:pb-0 lg:p-8 bg-neutral-0 w-full`}>
          <Outlet />
        </div>

    </div>
  )
}

export default Settings
