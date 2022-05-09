import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import NotesContext from "../NotesContext";
import AppContainer from "../components/AppContainer/AppContainer";
import MainContainer from "../components/MainContainer";
import SearchBar from "../components/SearchBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";
import NotePageForm from "../components/NotePageForm";

export default function Note() {
    const params = useParams();
    const noteId = params.noteid;
    const { updateSetNote, notes, notesTrash, setNotesTrash } = useContext(NotesContext)
    const navigate = useNavigate()
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
        <AppContainer>
            <SideBar />
            <MainContainer>
                <SearchBar page="Edit Note" />
                <NotePageForm data={data} deleteNote={deleteNote} handleSaveNote={handleSaveNote} navigate={navigate} />
            </MainContainer>
        </AppContainer>
    )
}
