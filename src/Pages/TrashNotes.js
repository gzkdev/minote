import { useContext } from "react"
import NotesContext from "../NotesContext"
import SideBar from "../components/SideBar/SideBar"
import SearchBar from "../components/SearchBar/SearchBar"
import NotesContainer from "../components/Notes/NotesContainer"
import TrashItem from "../components/TrashItem"

export default function TrashNotes() {
    const { notesTrash, addNote, setNotesTrash } = useContext(NotesContext);

    const deleteNote = (noteId) => {
        const newNotes = notesTrash.filter(note => note.id !== noteId);
        setNotesTrash(newNotes);
    }

    return (

        <>
            <SideBar />
            <SearchBar page="Trash" />
            <section>
                <NotesContainer>
                    {
                        notesTrash.length ? (
                            notesTrash.map(note => (
                                <TrashItem data={note} key={note.id} restoreNote={addNote} deleteNote={deleteNote} />
                            ))
                        ) : "You have no notes in trash"
                    }
                </NotesContainer>
            </section>
        </>
    )
}
