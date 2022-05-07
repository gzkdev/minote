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
    const { updateSetNote, notes } = useContext(NotesContext)
    const navigate = useNavigate()
    const data = notes[noteId];

    const deleteNote = (noteId) => {
        const newNotes = { ...notes };
        delete newNotes[noteId];
        updateSetNote(newNotes);
        navigate("/")
    }

    return (
        <AppContainer>
            <SideBar />
            <MainContainer>
                <SearchBar />
                <NotePageForm data={data} deleteNote={deleteNote} />
            </MainContainer>
        </AppContainer>
    )
}
