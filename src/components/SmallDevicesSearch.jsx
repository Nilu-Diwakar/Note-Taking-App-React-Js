import React from 'react'
import AllSearchedNotes from './AllSearchedNotes'
import icons from '../icons'
import useSearchNotes from '../hooks/useSearchNotes';
import { useSearchParams } from 'react-router-dom';
import AllNotesCards from './AllNotesCards';

function SmallDevicesSearch({notes, archiveNotes}) {
    const {searchHandler} = useSearchNotes();
    const [searchParam, setSearchParam] = useSearchParams();
    const searchStr = searchParam.get("search") || "";

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Search</h1>               
      <form className='relative mb-10' onSubmit={(e) => searchHandler(e, archiveNotes)}>
          <input type="text" name='search' placeholder='Search by title, content, or tags...' className="h-9 w-full px-4 py-3 pl-10 bg-transparent font-normal border border-borderClr focus:border-black rounded-md text-xs shadow-sm focus:outline-none placeholder:text-xs placeholder:font-normal"/>
          <button className='inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium focus:outline-none hover:bg-accent h-9 w-9 absolute left-0'>
          <img src={icons.search} alt="search-icon" className='w-4'/>
          </button>
      </form>
      {
        searchStr === "true" ? 
        (
          <AllNotesCards notes={notes} archiveNotes={archiveNotes}/>
        ):
        (
          <AllSearchedNotes notes={notes} archiveNotes={archiveNotes}/>
        )
      }
    </div>
    
  )
}

export default SmallDevicesSearch
