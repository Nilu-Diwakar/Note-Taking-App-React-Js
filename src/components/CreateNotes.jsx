import React from 'react'
import NoteForm from './NoteForm'

function CreateNotes() {
  return (
    <div className='flex w-full h-full'>
        <div className="flex-1 p-2 border border-neutral-200">
            <NoteForm />
        </div>
        <div className=" w-[200px]"></div>
    </div>
  )
}

export default CreateNotes
