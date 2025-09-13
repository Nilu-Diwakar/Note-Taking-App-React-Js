
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

const initialState ={
    notesData: localStorage.getItem("notesData") ? JSON.parse(localStorage.getItem("notesData")) : [],
    tagsData: localStorage.getItem("tagsData") ? JSON.parse(localStorage.getItem("tagsData")) : []
};

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers:{
        createNotes: (state, action) =>{
            const note = action.payload;
            state.notesData.push(note);
            localStorage.setItem("notesData", JSON.stringify(state.notesData));
            toast.success("Note Created");
        },
        
        addTags: (state, action) =>{
            const tagsArray = action.payload;
            tagsArray.forEach(tag => {
                if(!state.tagsData.includes(tag)){
                    state.tagsData.push(tag);
                }
            });
            localStorage.setItem("tagsData", JSON.stringify(state.tagsData));
        },

        updateNotes: (state, action) => {
            console.log("printing from updateNotes -> handler");
            const note = action.payload;
            const index = state.notesData.findIndex((obj) => obj.id === note.id);

            if (index >= 0) {
                state.notesData[index] = note;
                localStorage.setItem("notesData", JSON.stringify(state.notesData));
                toast.success("Note Updated");
            }
        },
        
        deleteNotes: (state, action) => {
            console.log("printing from deleteNotes -> handler ");
            const {noteId, index} = action.payload;
            if (index >= 0) {
                state.notesData.splice(index, 1);
                localStorage.setItem("notesData", JSON.stringify(state.notesData));
            }
        },

        changeArchiveStatus: (state, action) => {
            const {updatedData, index} = action.payload;
            if (index >= 0) {
                state.notesData[index] = updatedData;
                localStorage.setItem("notesData", JSON.stringify(state.notesData));
            }
        },
    }
});

export const {createNotes, addTags, updateNotes, deleteNotes, changeArchiveStatus} = noteSlice.actions;
export default noteSlice.reducer;

