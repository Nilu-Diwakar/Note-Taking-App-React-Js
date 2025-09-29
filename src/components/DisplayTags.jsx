import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Icons from '../icons';

function DisplayTags({archiveNotes}) {
    const allTags = useSelector((state) => state.note.tagsData);
    // console.log(allTags);

  return (
    <ul className='space-y-1 divide-y divide-neutral-200 lg:divide-y-0'>
      {
        allTags.map((tag, i) => (
            <li key={i}>
                <NavLink to={archiveNotes? `/archives?tag=${tag}` : `/?tag=${tag}`} className="flex items-center gap-2 px-3 py-2">
                  <Icons.Tag />
                  <span className='text-sm font-medium text-neutral-700'>{tag}</span>
                  {/* <Icons.ArrowRight className="ml-auto mr-2"/> */}
                </NavLink>
            </li>
        ))
      }
    </ul>
  )
}

export default DisplayTags
