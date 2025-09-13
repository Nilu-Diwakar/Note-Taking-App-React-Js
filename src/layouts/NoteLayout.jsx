import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import icons from '../icons'
import DisplayTags from '../components/DisplayTags'

function NoteLayout() {
  return (
    <div className='w-full px-4 h-full flex'>
        {/* Left Side */}
        <div className='flex flex-col gap-2 min-w-[240px] bg-neutral-0 border-r border-neutral-200'>
          <div className='flex flex-col gap-1 w-full'>
            <NavLink to={"/"} className={({ isActive }) =>`w-full flex gap-2 items-center overflow-hidden rounded-md p-2 text-left outline-none h-8 text-sm ${isActive?"bg-neutral-200" : ""}`}>
              {
                ({ isActive }) => (
                  <>
                    <img src={icons.home} alt="home-icon" className="w-4" />
                    <p>All Notes</p>
                    <img src={icons.arrowRight} alt="right-arrow-icon" className={`w-4 ml-auto ${isActive ? "block" : "hidden"}`}/>
                  </>
                )
              } 
            </NavLink>

            <NavLink to={"/archives"} className={({ isActive }) =>`w-full flex gap-2 items-center overflow-hidden rounded-md p-2 text-left outline-none h-8 text-sm ${isActive?"bg-neutral-200" : ""}`}>
              {
                ({ isActive }) => (
                  <>
                    <img src={icons.archive} alt="home-icon" className="w-4" />
                    <p>Archive Notes</p>
                    <img src={icons.arrowRight} alt="right-arrow-icon" className={`w-4 ml-auto ${isActive ? "block" : "hidden"}`}/>
                  </>
                )
              } 
            </NavLink>
          </div>

          <div className='mt-2 py-2 text-sm'>
            <h2 className='mb-2 font-normal'>Tags</h2>
            {/* SHOW ALL TAGS :- */}
            <DisplayTags />
          </div>
        </div>

        {/* Right Side */}
        <div className='w-full'>
          <Outlet />
        </div>

      </div>
  )
}

export default NoteLayout
