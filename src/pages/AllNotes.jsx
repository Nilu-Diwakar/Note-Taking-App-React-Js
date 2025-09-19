import React from 'react'
import { NavLink, Outlet, useOutlet, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AllNotesCards from '../components/AllNotesCards';
import AllTaggedNotes from '../components/AllTaggedNotes';
import icons from '../icons';
import AllSearchedNotes from '../components/AllSearchedNotes';
import DisplayTags from '../components/DisplayTags';
import SmallDevicesSearch from '../components/SmallDevicesSearch';

function AllNotes() {
    const outlet = useOutlet();
    const [searchParam, setSearchParam] = useSearchParams();
    const searchKey = Array.from(searchParam.keys())[0];
    const tagName = searchParam.get('tag');
    const allNotes = useSelector((state) => state.note.notesData);
    const archiveNotes = false;
    // Unarchived notes:-
    const notes = allNotes.filter((obj) => obj.archive === archiveNotes);


  return (
    <div className='w-full h-full flex'>
        <div className={`${outlet ? "hidden lg:block" : "block"} w-full lg:max-w-[230px] px-4 pt-5`}>
            
            <NavLink to="/notes/create" className='w-15 h-15 bg-blue-600 flex justify-center items-center rounded-full fixed bottom-20 right-5 lg:w-full lg:h-9 lg:bg-blue-500 lg:inline-flex lg:gap-2 lg:px-4 lg:py-2 lg:mb-4 lg:text-base lg:font-medium lg:focus:outline-none lg:rounded-3xl lg:static'>
                <p className="hidden lg:block text-neutral-0">+ Create New Note</p>
                <img src={icons.plus} alt="plus-icon" className="block lg:hidden w-5 h-5" />
            </NavLink>

            <div className='divide-y divide-neutral-200 pb-15'>
                {/* All NoteCards.jsx */}
                {
                    searchKey === undefined &&
                    <AllNotesCards notes={notes} archiveNotes={archiveNotes}/>
                }
                {
                    searchKey === "tag" &&
                    (
                        tagName === "true" ? 
                        (
                            <div className='lg:hidden'>
                                <p className='mb-3'>Tags</p>
                                <DisplayTags archiveNotes={false}/>
                            </div>
                        ) : 
                        (
                            <AllTaggedNotes notes={notes} tagName={tagName} archiveNotes={archiveNotes}/>
                        )
                    )
                    
                }
                {
                    searchKey === "search" &&
                    <>
                        <div className='lg:hidden'>
                            <SmallDevicesSearch  notes={notes} archiveNotes={archiveNotes}/>
                        </div>
                        <div className='hidden lg:block'>
                            <AllSearchedNotes notes={notes} archiveNotes={archiveNotes}/>
                        </div>
                    </>
                }
            </div>
        </div>

        <div className={`${outlet ?"block" : "hidden lg:block"} h-full w-full`}>
            <Outlet />
        </div>
    </div>
  )
}

export default AllNotes
