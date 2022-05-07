import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import NotesContext from "../NotesContext";
import AppContainer from "../components/AppContainer/AppContainer";
import MainContainer from "../components/MainContainer";
import SearchBar from "../components/SearchBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";

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
                <section>
                    <h4>{data.title}</h4>
                    <span>{data.date}</span>
                    <p>{data.content && data.content}</p>
                    <button onClick={() => deleteNote(data.id)} style={{ background: "gray" }}>delete note</button>
                </section>
            </MainContainer>
        </AppContainer>
    )
}
