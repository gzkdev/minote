import { createContext, useState } from "react";


const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, SetNotes] = useState([]);
    const [isGrid, setIsGrid] = useState(false);
    const [theme, setTheme] = useState("light")
    const [searchText, setSearchText] = useState("");


    document.documentElement.setAttribute("data-theme", theme);

    const toggleTheme = () => {
        (theme === "dark") ? setTheme("light") : setTheme("dark")

        document.documentElement.setAttribute("data-theme", theme);
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
        <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote, isGrid, setIsGrid, toggleTheme, theme, searchText, setSearchText }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContext;