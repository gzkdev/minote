import { createContext, useContext, useEffect, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, SetNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || {}
    });
    const [isActive, setIsActive] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [notesTrash, setNotesTrash] = useState(() => {
        return JSON.parse(localStorage.getItem("notesTrash")) || [];
    })
    const [notesArrangement, setNotesArrangement] = useState(false)

    const toggleisActive = (e) => {
        setIsActive(isActive => !isActive);
    }

    const addNote = (data) => {
        SetNotes({ ...notes, [data.id]: data });
    }

    // const deleteNote = (noteId) => {
    //     const newNotes = { ...notes };
    //     setNotesTrash([...notesTrash, notes[noteId]]);
    //     delete newNotes[noteId];
    //     updateSetNote(newNotes);
    //     navigate("/")
    // }

    const updateSetNote = (data) => {
        SetNotes(data)
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
        localStorage.setItem("notesTrash", JSON.stringify(notesTrash))
    }, [notes, notesTrash])

    return (
        <NotesContext.Provider value={{ notes, toggleisActive, isActive, addNote, searchText, setSearchText, updateSetNote, notesTrash, setNotesTrash, notesArrangement, setNotesArrangement }}>
            {children}
        </NotesContext.Provider>
    )
}

export const UseNotesContext = () => {
    return useContext(NotesContext);
}

export default NotesContext;