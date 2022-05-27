import { createContext, useContext, useEffect, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, SetNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || {}
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [notesTrash, setNotesTrash] = useState(() => {
        return JSON.parse(localStorage.getItem("notesTrash")) || [];
    })
    const [favoriteNotes, setFavoriteNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("favoriteNotes")) || [];
    })

    const [notesArrangement, setNotesArrangement] = useState(false)

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    const [notification, setNotification] = useState("")
    const [showNotification, setShowNotification] = useState(false)


    const updateSetNote = (data) => {
        SetNotes(data)
    }

    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
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

    const handlePermanentDeleteNote = (noteId) => {
        const newTrashNotes = notesTrash.filter(note => note.id !== noteId)
        setNotesTrash(newTrashNotes);
        setNotification("deleted_permanent")
        setShowNotification(true)
    }

    const handleRestoreNote = (data) => {
        addNote(data);
        const newTrashNotes = notesTrash.filter(note => note.id !== data.id)

        setNotesTrash(newTrashNotes)
        setNotification("restored")
        setShowNotification(true)
    }

    const toggleNotesArrangement = () => {
        setNotesArrangement(!notesArrangement)
    }

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
        localStorage.setItem("notesTrash", JSON.stringify(notesTrash))
        localStorage.setItem("favoriteNotes", JSON.stringify(favoriteNotes))
    }, [notes, notesTrash, favoriteNotes])

    useEffect(() => {
        setTimeout(() => setShowNotification(false), 2000)
    }, [showNotification])

    return (
        <NotesContext.Provider value={{ notes, toggleIsMenuOpen, isMenuOpen, addNote, updateSetNote, notesTrash, setNotesTrash, notesArrangement, toggleNotesArrangement, favoriteNotes, setFavoriteNotes, handleRemoveFromFavorites, handleDeleteNote, handleAddToFavorites, theme, toggleTheme, setNotification, notification, setShowNotification, showNotification, handlePermanentDeleteNote, handleRestoreNote }}>
            {children}
        </NotesContext.Provider>
    )
}

export const UseNotesContext = () => {
    return useContext(NotesContext);
}