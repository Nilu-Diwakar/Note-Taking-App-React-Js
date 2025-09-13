import React from 'react'
import { useDispatch } from 'react-redux';
import { changeArchiveStatus, deleteNotes } from '../redux/noteSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function useEditNote(noteId, allNotes, index) {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    // **********************************************
    // ******* to Archive/Unarchive the notes *******
    // **********************************************
    function archiveHandler(setShowArchiveWarning, archiveStatus){
        const updatedData = {
            ...allNotes[index],
            archive : !allNotes[index].archive,
        };
        dispatch(changeArchiveStatus({updatedData, index}));
        setShowArchiveWarning(false);
        archiveStatus ? toast.success("Unarchived Successfuly") : toast.success("Archived Successfuly");
    }

    // ************************************
    // ******* to Delelte the notes *******
    // ************************************
    function deleteHandler(noteId){
        dispatch(deleteNotes({noteId, index}));
        navigation("/");
        toast.success("Deleted Successfuly")
    }


    return {archiveHandler, deleteHandler}
}

export default useEditNote
