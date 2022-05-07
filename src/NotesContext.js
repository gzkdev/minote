import { createContext, useState } from "react";

const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, SetNotes] = useState({});
    const [isActive, setIsActive] = useState(false)
    const [searchText, setSearchText] = useState("");


    const toggleisActive = (e) => {
        setIsActive(isActive => !isActive);
    }

    const addNote = (data) => {
        SetNotes({ ...notes, [data.id]: data });
    }

    const updateSetNote = (data) => {
        SetNotes(data)
    }

    return (
        <NotesContext.Provider value={{ notes, toggleisActive, isActive, addNote, searchText, setSearchText, updateSetNote }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;