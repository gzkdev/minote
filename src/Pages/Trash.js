import { HomeStyled, NotesContainer } from "../components/styled"
import SearchBar from "../components/SearchBar/SearchBar"
import { UseNotesContext } from "../NotesContext"
import NoteItemTrash from "../components/Notes/NoteItem.trash"

const Trash = () => {
    const { notesTrash } = UseNotesContext()

    return (
        <HomeStyled>
            <h1>Trash</h1>
            <SearchBar />
            <NotesContainer>
                {notesTrash.length > 0 && notesTrash.map(note => <NoteItemTrash key={note.id} data={note} />)
                }
            </NotesContainer>
        </HomeStyled>
    )
}

export default Trash