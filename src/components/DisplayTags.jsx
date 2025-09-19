import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import icons from '../icons';

function DisplayTags({archiveNotes}) {
    const allTags = useSelector((state) => state.note.tagsData);
    // console.log(allTags);

  return (
    <ul className='space-y-1 divide-y divide-neutral-200 lg:divide-y-0'>
      {
        allTags.map((tag, i) => (
            <li key={i}>
                <NavLink to={archiveNotes? `/archives?tag=${tag}` : `/?tag=${tag}`} className="flex items-center gap-2 px-3 py-2">
                  <img src={icons.tag} alt="tag-icon" />
                  <span className='text-sm font-medium text-neutral-700'>{tag}</span>
                  {/* <img src={icons.arrowRight} alt="arrowRight-icon" className='ml-auto w-6'/> */}
                </NavLink>
            </li>
        ))
      }
    </ul>
  )
}

export default DisplayTags
