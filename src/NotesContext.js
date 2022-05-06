import { createContext, useState } from "react";


const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, SetNotes] = useState([]);
    const [isGrid, setIsGrid] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [searchText, setSearchText] = useState("");

    const toggleisActive = (e) => {
        setIsActive(isActive => !isActive);
    }

    const addNote = (data) => {
        SetNotes(prevNotes => [...prevNotes, data])
    }

    const deleteNote = (id) => {
        let newNotes = notes.filter(note => note.id !== id)
        SetNotes(newNotes)
    }

    const updateNote = (index, title, text, date) => {
        let note = notes[index];
        note.title = title;
        note.text = text;
        note.date = date;
    }

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote, isGrid, setIsGrid, toggleisActive, isActive, searchText, setSearchText }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;