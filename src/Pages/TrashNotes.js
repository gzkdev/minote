import { useContext } from "react"
import NotesContext from "../NotesContext"
import AppContainer from "../components/AppContainer/AppContainer"
import SideBar from "../components/SideBar/SideBar"
import MainContainer from "../components/MainContainer"
import SearchBar from "../components/SearchBar/SearchBar"
import NotesContainer from "../components/Notes/NotesContainer"
import TrashItem from "../components/TrashItem"

export default function TrashNotes() {
    const { notesTrash } = useContext(NotesContext)

    // const handleDeleteNote = (id) => {
    //     const newNotes = notesTrash.filter(note => note.id !== id)
    //     setNotesTrash(newNotes);
    // }
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
                                    <TrashItem data={note} key={note.id} />
                                ))
                            ) : "You have no notes in trash"
                        }
                    </NotesContainer>
                </section>
            </MainContainer>
        </AppContainer>
    )
}
