import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
    const navigate = useNavigate();

    const [notes, SetNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || {}
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [notesTrash, setNotesTrash] = useState(() => {
        return JSON.parse(localStorage.getItem("notesTrash")) || [];
    })
    const [favoriteNotes, setFavoriteNotes] = useState([])

    const [notesArrangement, setNotesArrangement] = useState(false)

    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const addNote = (data) => {
        SetNotes({ ...notes, [data.id]: data });
    }

    const handleDeleteNote = (noteId) => {
        const newNotes = { ...notes };
        setNotesTrash([...notesTrash, notes[noteId]]);
        delete newNotes[noteId];
        updateSetNote(newNotes);
        navigate("/")
    }

    const handleAddToFavorites = (noteId) => {
        const note = notes[noteId];
        setFavoriteNotes([...favoriteNotes, note])
    }

    const updateSetNote = (data) => {
        SetNotes(data)
    }

    const toggleNotesArrangement = () => {
        setNotesArrangement(!notesArrangement)
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
        localStorage.setItem("notesTrash", JSON.stringify(notesTrash))
    }, [notes, notesTrash])

    return (
        <NotesContext.Provider value={{ notes, toggleIsMenuOpen, isMenuOpen, addNote, searchText, setSearchText, updateSetNote, notesTrash, setNotesTrash, notesArrangement, toggleNotesArrangement, favoriteNotes, setFavoriteNotes, handleDeleteNote, handleAddToFavorites, toggleDarkMode }}>
            {children}
        </NotesContext.Provider>
    )
}

export const UseNotesContext = () => {
    return useContext(NotesContext);
}