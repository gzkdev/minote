import { PageContainer, NotesContainer } from "../components/styled"
import SearchBar from "../components/SearchBar/SearchBar"
import { UseNotesContext } from "../NotesContext"
import NoteItemTrash from "../components/Notes/NoteItem.trash"

const Trash = () => {
    const { notesTrash } = UseNotesContext()

    return (
        <PageContainer>
            <h1 className="body__text">Trash</h1>
            <SearchBar />
            <NotesContainer>
                {notesTrash.length > 0 && notesTrash.map(note => <NoteItemTrash key={note.id} data={note} />)
                }
            </NotesContainer>
        </PageContainer>
    )
}

export default Trash