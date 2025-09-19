import React from "react";
import { useDispatch } from "react-redux";
import { addTags, createNotes, updateNotes } from "../redux/noteSlice";
import { useNavigate } from "react-router-dom";

function useNote() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  // console.log("inside useNote");

  function validateNote(noteData) {
    let errs = {};
    if (!noteData.title.trim() || noteData.title.trim().length < 2) {
      errs.title = "Title must contain at least 2 characters";
    }
    if (!noteData.tag.trim() || noteData.tag.trim().length < 2) {
      errs.tag = "Tag must contain at least 2 characters";
    }
    if (!noteData.noteMessage.trim() || noteData.noteMessage.trim().length < 2) {
      errs.noteMessage = "Note must contain at least 2 characters";
    }
    return errs;
  }

  function createHandler(e, noteData, setNoteData, setErrors) {
    e.preventDefault();
    console.log("inside createHandler");
    const errs = validateNote(noteData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs); // show errors in UI
      return; // stop execution
    }

    setErrors({ title: "", tag: "", noteMessage: "" }); // clear errors
    const tagsArray = noteData.tag.split(",").map((tag) => tag.trim());

    const updatedNote = {
      ...noteData,
      id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
      tag: tagsArray,

      updateDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    // setNoteData(updatedNote);
    console.log("in createHandler, updateNote:- ", updatedNote);

    // use "updatedNote" instead of "noteData" becoz, useState takes time to update the value
    dispatch(createNotes(updatedNote));
    dispatch(addTags(tagsArray));

    // reseting ui to empty
    setNoteData((prevData) => {
      return {
        ...prevData,
        id: "",
        title: "",
        tag: "",
        updateDate: "Not yet saved.",
        noteMessage: "",
        archive: false,
      };
    });

    navigation(`/notes/${updatedNote.id}`);
  }

  function updateHandler(e, noteData, setNoteData, setErrors) {
    e.preventDefault();
    const errs = validateNote(noteData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({ title: "", tag: "", noteMessage: "" });
    const tagsArray = noteData.tag.split(",").map((tag) => tag.trim());

    const updatedNote = {
      ...noteData,
      tag: tagsArray,
      updateDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setNoteData(updatedNote);
    console.log("in UpdateHandler, updateNote:- ", updatedNote);
    console.log("in UpdateHandler, tagsArray:- ", updatedNote.tag);

    // use "updatedNote" instead of "noteData" becoz, useState takes time to update the value
    dispatch(updateNotes(updatedNote));
    dispatch(addTags(updatedNote.tag));
  }

  return { createHandler, updateHandler };
}

export default useNote;
