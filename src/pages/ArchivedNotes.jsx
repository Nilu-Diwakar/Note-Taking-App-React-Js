import React from 'react'
import { NavLink, Outlet, useOutlet, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AllNotesCards from '../components/AllNotesCards';
import AllTaggedNotes from '../components/AllTaggedNotes';
import icons from '../icons';
import AllSearchedNotes from '../components/AllSearchedNotes';

function ArchivedNotes() {
  const outlet = useOutlet();
  const [searchParam, setSearchParam] = useSearchParams();
  const searchKey = Array.from(searchParam.keys())[0];
  const tagName = searchParam.get('tag');
  const archiveNotes = true;
  const allNotes = useSelector((state) => state.note.notesData);
  const archivedNotes = allNotes.filter((obj) => obj.archive === archiveNotes);

  return (
    <div className='w-full h-full flex'>
        <div className={`${outlet ? "hidden lg:block" : "block"} w-full lg:max-w-[230px] px-4 pt-5`}>
          <div className='divide-y divide-neutral-200 pb-15'>
            {/* All NoteCards.jsx */}
            {
              searchKey === undefined &&
              <AllNotesCards notes={archivedNotes} archiveNotes={archiveNotes}/>
            }
            {
              searchKey === "tag" &&
              <AllTaggedNotes notes={archivedNotes} tagName={tagName} archiveNotes={archiveNotes}/>
            }
            {
              searchKey === "search" &&
              <AllSearchedNotes notes={archivedNotes} archiveNotes={archiveNotes}/>
            }
          </div>
        </div>

        <div className="h-full w-full">
            <Outlet />
        </div>
    </div>
  )
}

export default ArchivedNotes
