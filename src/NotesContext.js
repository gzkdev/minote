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
        const newNotes = { ...notes };
        newNotes[data.id] = data;
        SetNotes(newNotes);
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
        <NotesContext.Provider value={{ notes, toggleisActive, isActive, addNote, searchText, setSearchText }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;