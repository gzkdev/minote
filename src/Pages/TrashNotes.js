import { useContext } from "react"
import NotesContext from "../NotesContext"
import AppContainer from "../components/AppContainer/AppContainer"
import SideBar from "../components/SideBar/SideBar"
import MainContainer from "../components/MainContainer"
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

        <AppContainer>
            <SideBar />
            <MainContainer>
                <SearchBar />
                <section>
                    <h1>Trash</h1>
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
            </MainContainer>
        </AppContainer>
    )
}
