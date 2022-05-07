import { createContext, useState } from "react";


const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, SetNotes] = useState({
        "0": {
            id: "0",
            title: "New note",
            content: "Lorem ipsum is crazy",
            date: "12/12/2022"
        },
        "1": {
            id: "1",
            title: "Second note",
            content: "Lorem ipsum is crazy and enough",
            date: "14/12/2022"
        }
    });
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
        <NotesContext.Provider value={{ notes, toggleisActive, isActive }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;