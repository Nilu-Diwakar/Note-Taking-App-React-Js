import React from 'react'
import { NavLink } from 'react-router-dom';

function AllTaggedNotes({notes, tagName}) {
    const filteredNotes = notes.filter(obj => obj.tag.includes(tagName));
    // console.log("filter tag data:- ",filteredNotes);
    
  return (
    <div className='w-full flex flex-col divide-y divide-neutral-300'>
        {
            filteredNotes.length >0 ?
            (
                filteredNotes.map((obj) => (
                    <NavLink to={`/notes/${obj.id}`} key={obj.id} className="flex flex-col rounded-lg p-2 space-y-3">
                    <p className="font-semibold text-base">{obj?.title}</p>
                    
                    <div className="flex flex-wrap gap-1">
                        {
                            obj.tag.map((t, i) => (
                                <span key={i} className="font-normal text-xs text-neutral-950 rounded bg-neutral-200 px-1.5 py-0.5">{t}</span>
                            ))
                        }
                    </div>
                    <span className="text-xs font-normal text-neutral-700">{obj.updateDate}</span>
                    </NavLink>
                ))
            ) :
            (
                <p className='text-neutral-950 bg-neutral-200 text-xs font-normal p-2 rounded-lg mt-1'>You don't have any notes yet. Start a new note to capture your thoughts and ideas.</p>
            )
        }
    </div>
  )
}

export default AllTaggedNotes
