import { useParams, useNavigate } from "react-router-dom"
import { UseNotesContext } from "../NotesContext"
import { HomeStyled } from "../components/styled"
import { UpdateNoteForm } from "../components/NoteForms"

const Note = () => {
    const params = useParams();
    const noteId = params.id;
    const navigate = useNavigate();
    const { updateSetNote, notes, notesTrash, setNotesTrash, toggleIsMenuOpen } = UseNotesContext();
    const data = notes[noteId];

    const deleteNote = (noteId) => {
        const newNotes = { ...notes };
        setNotesTrash([...notesTrash, notes[noteId]]);
        delete newNotes[noteId];
        updateSetNote(newNotes);
        navigate("/")
    }

    const handleSaveNote = (data) => {
        notes[data.id] = data;
        navigate("/")
    }

    return (
        <HomeStyled>
            <UpdateNoteForm data={data} deleteNote={deleteNote} handleSaveNote={handleSaveNote} toggleMenu={toggleIsMenuOpen} />
        </HomeStyled>
    )
}

export default Note




