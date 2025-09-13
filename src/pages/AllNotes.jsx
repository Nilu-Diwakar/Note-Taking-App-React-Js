import React from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AllNotesCards from '../components/AllNotesCards';
import AllTaggedNotes from '../components/AllTaggedNotes';

function AllNotes() {
    const allNotes = useSelector((state) => state.note.notesData);
    const [searchParam, setSearchParam] = useSearchParams();
    const searchKey = Array.from(searchParam.keys())[0];
    const searchValue = searchParam.get('search');
    const tagName = searchParam.get('tag');


  return (
    <div className='w-full h-full flex'>
        <div className="lg:w-[230px] px-4 pt-5 border border-neutral-200">
            <NavLink to={"/notes/create"} className='w-full inline-flex items-center justify-center gap-2 px-4 py-2 mb-4 text-base font-medium focus:outline-none bg-blue-500 h-9 rounded-3xl'>
                <p className='text-neutral-0'>+ Create New Note</p>
            </NavLink>

            <div className='divide-y divide-neutral-200'>
                {/* All NoteCards.jsx */}
                {
                    searchKey === undefined &&
                    <AllNotesCards notes={allNotes}/>
                }
                {
                    searchKey === "tag" &&
                    <AllTaggedNotes notes={allNotes} tagName={tagName}/>
                }
            </div>
        </div>

        <div className="flex-1 h-full">
            <Outlet />
        </div>
    </div>
  )
}

export default AllNotes
