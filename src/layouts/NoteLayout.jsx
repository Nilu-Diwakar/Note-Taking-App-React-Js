import React from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom'
import icons from '../icons'
import DisplayTags from '../components/DisplayTags'
import useSearchNotes from '../hooks/useSearchNotes';

function NoteLayout({archiveNotes}) {
  const outlet = useOutlet();
  const {searchHandler} = useSearchNotes();

  return (
    <div className='w-full lg:px-4 h-full flex'>
        {/* Left Side */}
        <div className={`${outlet ?"hidden lg:flex" : "flex"} flex-col gap-2 min-w-[240px] bg-neutral-0 fixed inset-y-0`}>

          <header className='w-full h-19 flex items-center justify-between py-3 px-4 bg-neutral-0 border-b border-neutral-200'>
            <NavLink to={'/'} >
              <img src={icons.logo} alt="logo-svg" />
            </NavLink>
          </header>

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

          <div className='mt-2 py-2 text-sm  border-t border-neutral-200'>
            <h2 className='mb-2 font-normal'>Tags</h2>
            {/* SHOW ALL TAGS :- */}
            <DisplayTags archiveNotes={archiveNotes}/>
          </div>
        </div>

        {/* Right Side */}
        <div className='w-full h-full lg:ml-60'>
          
          <header className='w-full h-19 hidden lg:flex items-center justify-between py-3 px-4 bg-neutral-0 border-b border-neutral-200'>
            <div className='flex-1 flex items-center justify-between px-3 py-2'>
              <h1 className='font-bold text-2xl'>{archiveNotes? "Archived Notes" : "All Notes"}</h1>
              <div className='flex items-center gap-4'>
                <form className='relative' onSubmit={(e) => searchHandler(e, archiveNotes)}>
                  <input type="text" name='search' placeholder='Search by title, content, or tags...' className="w-[300px] h-9 px-4 py-3 pl-10 bg-transparent font-normal border border-borderClr focus:border-black rounded-md text-xs shadow-sm focus:outline-none placeholder:text-xs placeholder:font-normal"/>
                  <button className='inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium focus:outline-none hover:bg-accent h-9 w-9 absolute left-0'>
                    <img src={icons.search} alt="search-icon" className='w-4'/>
                  </button>
                </form>
                <NavLink>
                  <img src={icons.setting} alt="setting-icon" />
                </NavLink>
              </div>
            </div>
          </header>
          
          <Outlet />
        </div>

      </div>
  )
}

export default NoteLayout
