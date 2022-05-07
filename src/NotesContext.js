import { createContext, useEffect, useState } from "react";

const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, SetNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || {}
    });
    const [isActive, setIsActive] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [notesTrash, setNotesTrash] = useState(() => {
        return JSON.parse(localStorage.getItem("notesTrash")) || [];
    })


    const toggleisActive = (e) => {
        setIsActive(isActive => !isActive);
    }

    const addNote = (data) => {
        SetNotes({ ...notes, [data.id]: data });
    }

    const updateSetNote = (data) => {
        SetNotes(data)
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
        localStorage.setItem("notesTrash", JSON.stringify(notesTrash))
        console.log(notesTrash);
    }, [notes, notesTrash])

    return (
        <NotesContext.Provider value={{ notes, toggleisActive, isActive, addNote, searchText, setSearchText, updateSetNote, setNotesTrash, notesTrash }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;