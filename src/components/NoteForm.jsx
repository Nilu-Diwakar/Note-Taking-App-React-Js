import React, { useEffect, useState } from 'react'
import icons from '../icons/index';
import useNote from '../hooks/useNote';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

function NoteForm({noteId, archiveStatus}) {
    const {createHandler, updateHandler} = useNote();
    const {notesData, tagsData} = useSelector((state) => state.note);
    const noteIdData = notesData.find((obj) => obj.id === noteId);
    // console.log(noteId? `got id ${noteId}` : "no id");
    
    const [noteData, setNoteData] = useState(
        noteId? {...noteIdData, tag:noteIdData.tag.join(", ")} : 
        {id:"", title:"", tag:"", updateDate:"Not yet saved.", noteMessage:"", archive:false}
    );
    
    function changeHandler(e){
        setNoteData((prevData) => {
            return{
            ...prevData,
            [e.target.name]:e.target.value,
            }
        });
    };


    const currentUrlPath = useLocation().pathname;

    // useEffect(() => {
    //     changeHandler();
    // }, [currentUrlPath]);



  return (
    <form onSubmit={(e) =>noteId? updateHandler(e, noteData, setNoteData) : createHandler(e, noteData, setNoteData)} className="h-full w-full px-6 py-4 flex flex-col">
        <input type="text" name='title' value={noteData.title} placeholder='Enter a title...' className='w-full px-3 py-1 rounded-lg text-2xl font-bold h-9 focus:outline-none focus:border-[1.5px]' onChange={changeHandler}/>

        <div className='mt-3 flex items-center gap-x-2'>
            <div className='flex items-center py-1 gap-x-2 w-29 pr-20'>
                <img src={icons.tag} alt="tag-icon" className='w-4 h-4'/>
                <p className='text-sm font-normal text-neutral-700'>Tags</p>
            </div>
            <input type="text" name='tag' value={noteData.tag} placeholder='Add tags separated by commas (e.g. Work, Planning)' className='w-full h-auto text-xs font-normal focus:border-b-[1.5px] focus:outline-none' onChange={changeHandler}/>
        </div>

        <div className={`${archiveStatus ? "flex" : "hidden"} items-center`}>
            <div className='flex items-center py-1 gap-x-2 w-29'>
                <img src={icons.status} alt="clock-icon" className='w-4 h-4'/>
                <p className='text-sm font-normal text-neutral-700'>Status</p>
            </div>
            <span className='text-xs font-normal text-neutral-950'>Archived</span>
        </div>

        <div className='flex items-center'>
            <div className='flex items-center py-1 gap-x-2 w-29'>
                <img src={icons.clock} alt="clock-icon" className='w-4 h-4'/>
                <p className='text-sm font-normal text-neutral-700'>Last Edited</p>
            </div>
            <span className='text-xs font-normal text-neutral-950'>{noteData.updateDate}</span>
        </div>


        <div className="mt-7 flex-1 flex flex-col">
            <textarea name='noteMessage' value={noteData.noteMessage} placeholder='Start typing your note here...' className="flex-1 w-full resize-none rounded-md px-3 text-base font-normal text-neutral-800 leading-6 focus:border-[1.5px] focus:outline-none" onChange={changeHandler}/>
            
            <div className="mt-7">
                {
                    noteId ? 
                    (
                        <>
                        <button className="text-sm font-medium text-neutral-0 bg-blue-500 hover:cursor-pointer px-4 py-2 rounded-lg mr-2">
                            Update
                        </button>
                        <NavLink to={"/"}>
                            <button className="text-sm font-medium text-neutral-600 bg-neutral-200 hover:cursor-pointer px-4 py-2 rounded-lg">
                            Cancel
                            </button>
                        </NavLink>
                        </>
                    ) : 
                    (
                        <button className="text-sm font-medium text-white bg-black hover:cursor-pointer px-4 py-2 rounded-lg">
                        Submit
                        </button>
                    )
                }
            </div>
            
        </div>
    </form>
  )
}

export default NoteForm

