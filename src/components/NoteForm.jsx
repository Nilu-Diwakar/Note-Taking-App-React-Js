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
    
    const [errors, setErrors] = useState({ title: "", tag: "", noteMessage: "" });
    const [noteData, setNoteData] = useState(
        noteId? {...noteIdData, tag:noteIdData.tag.join(", ")} : 
        {id:"", title:"", tag:"", updateDate:"Not yet saved.", noteMessage:"", archive:false}
    );
    

    useEffect(() => {
        setNoteData(
            noteId? {...noteIdData, tag:noteIdData.tag.join(", ")} : 
            {id:"", title:"", tag:"", updateDate:"Not yet saved.", noteMessage:"", archive:false}
        )
    }, [noteId]);
    
    function changeHandler(e){
        setNoteData((prevData) => {
            return{
            ...prevData,
            [e.target.name]:e.target.value,
            }
        });

        // // simple validation
        // if (e.target.value.trim().length < 2) {
        // setErrors((prev) => ({ ...prev, [e.target.name]: "String must contain at least 2 character(s)" }));
        // } else {
        // setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
        // }
    };


  return (
    <form onSubmit={(e) =>noteId? updateHandler(e, noteData, setNoteData, setErrors) : createHandler(e, noteData, setNoteData, setErrors)} className="h-full w-full py-4 flex flex-col">

        <div className='px-6'>
            <input type="text" name='title' value={noteData.title} placeholder='Enter a title...' className='w-full px-3 py-1 rounded-lg text-2xl font-bold h-9 focus:outline-none focus:border-[1.5px]' onChange={changeHandler}/>
            {
                errors.title && 
                (
                    <div className="flex gap-x-2">
                        <img src={icons.exclamation} alt="exclamation-icon" />
                        <p className='text-[0.8rem] font-medium text-red-400'>String must contain at least 2 character(s)</p>
                    </div>
                )
            }
            

            <div className='mt-3 flex items-center gap-x-2'>
                <div className='flex items-center py-1 gap-x-2 w-29 pr-20'>
                    <img src={icons.tag} alt="tag-icon" className='w-4 h-4'/>
                    <p className='text-sm font-normal text-neutral-700'>Tags</p>
                </div>

                <input type="text" name='tag' value={noteData.tag} placeholder='Add tags separated by commas (e.g. Work, Planning)' className={`w-full text-xs font-normal ${noteId ? "focus:border-b-[1.5px]  h-auto" : "focus:border-[1.5px] h-9 px-3 py-1 rounded-md"} focus:outline-none`} onChange={changeHandler}/>
            </div>
            {/* <div className='flex gap-x-2 ml-30'>
                <img src={icons.exclamation} alt="exclamation-icon" />
                <p className='text-[0.8rem] font-medium text-red-400'>String must contain at least 2 character(s)</p>
            </div> */}
            {
                errors.tag && 
                (
                    <div className="flex gap-x-2">
                        <img src={icons.exclamation} alt="exclamation-icon" />
                        <p className='text-[0.8rem] font-medium text-red-400'>String must contain at least 2 character(s)</p>
                    </div>
                )
            }

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
        </div>


        <div className="px-6 py-4 mt-3 flex-1 flex flex-col border-t border-neutral-200">
            <textarea name='noteMessage' value={noteData.noteMessage} placeholder='Start typing your note here...' className="flex-1 w-full resize-none rounded-md px-3 text-base font-normal text-neutral-800 leading-6 focus:border-[1.5px] focus:outline-none" onChange={changeHandler}/>
            {
                errors.noteMessage && 
                (
                    <div className="flex gap-x-2">
                        <img src={icons.exclamation} alt="exclamation-icon" />
                        <p className='text-[0.8rem] font-medium text-red-400'>String must contain at least 2 character(s)</p>
                    </div>
                )
            }
            
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

