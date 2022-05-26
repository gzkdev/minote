import { createContext, useContext, useEffect, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
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

    const [notification, setNotification] = useState("")
    const [showNotification, setShowNotification] = useState(false)


    const updateSetNote = (data) => {
        SetNotes(data)
    }

    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const addNote = (data) => {
        SetNotes({ ...notes, [data.id]: data })
        setNotification("added")
        setShowNotification(true)
    }

    const handleDeleteNote = (noteId) => {
        const newNotes = { ...notes };
        setNotesTrash([...notesTrash, notes[noteId]]);
        delete newNotes[noteId];
        const newFavoriteNotes = favoriteNotes.filter(note => note.id !== noteId)
        setFavoriteNotes(newFavoriteNotes);
        updateSetNote(newNotes);
        setNotification("deleted")
        setShowNotification(true)
    }

    const handleAddToFavorites = (noteId) => {
        const note = notes[noteId];
        if (!(favoriteNotes.find(note => note.id === noteId))) {
            setFavoriteNotes([...favoriteNotes, note])
            setNotification("favorite")
            setShowNotification(true)
            return
        }
        setNotification("warn_favorite")
        setShowNotification(true)
    }

    const handleRemoveFromFavorites = (noteId) => {
        const newFavoriteNotes = favoriteNotes.filter(note => note.id !== noteId)
        setFavoriteNotes(newFavoriteNotes)
        setNotification("deleted_favorite")
        setShowNotification(true)
    }

    const toggleNotesArrangement = () => {
        setNotesArrangement(!notesArrangement)
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
        localStorage.setItem("notesTrash", JSON.stringify(notesTrash))
    }, [notes, notesTrash])

    useEffect(() => {
        setTimeout(() => setShowNotification(false), 2000)
    }, [showNotification])

    return (
        <NotesContext.Provider value={{ notes, toggleIsMenuOpen, isMenuOpen, addNote, searchText, setSearchText, updateSetNote, notesTrash, setNotesTrash, notesArrangement, toggleNotesArrangement, favoriteNotes, setFavoriteNotes, handleRemoveFromFavorites, handleDeleteNote, handleAddToFavorites, toggleDarkMode, setNotification, notification, setShowNotification, showNotification }}>
            {children}
        </NotesContext.Provider>
    )
}

export const UseNotesContext = () => {
    return useContext(NotesContext);
}