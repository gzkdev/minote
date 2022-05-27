import { AddNoteForm } from "../components/NoteForms"
import { HomeStyled } from "../components/styled"
import { UseNotesContext } from "../NotesContext"

const AddNote = () => {
    const { toggleIsMenuOpen } = UseNotesContext()
    return (
        <HomeStyled>
            <AddNoteForm toggleMenu={toggleIsMenuOpen} />
        </HomeStyled>
    )
}

export default AddNote
