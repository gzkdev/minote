import NoteForm from "../components/AddNoteForm/NoteForm"
import { HomeStyled } from "../components/styled"
import { UseNotesContext } from "../NotesContext"

const AddNote = () => {
    const { toggleIsMenuOpen } = UseNotesContext()
    return (
        <HomeStyled>
            <NoteForm toggleMenu={toggleIsMenuOpen} />
        </HomeStyled>
    )
}

export default AddNote
