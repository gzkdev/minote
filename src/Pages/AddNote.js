import { AddNoteForm } from "../components/NoteForms"
import { PageContainer } from "../components/styled"
import { UseNotesContext } from "../NotesContext"

const AddNote = () => {
    const { toggleIsMenuOpen } = UseNotesContext()
    return (
        <PageContainer>
            <AddNoteForm toggleMenu={toggleIsMenuOpen} />
        </PageContainer>
    )
}

export default AddNote
