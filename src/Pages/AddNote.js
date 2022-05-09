import AppContainer from "../components/AppContainer/AppContainer"
import MainContainer from "../components/MainContainer"
import SideBar from "../components/SideBar/SideBar"
import SearchBar from "../components/SearchBar/SearchBar"
import NoteForm from "../components/AddNoteForm/NoteForm"

export default function AddNote() {
    return (
        <AppContainer>
            <SideBar />
            <MainContainer>
                <SearchBar page="Add note" />
                <section>
                    <NoteForm />
                </section>
            </MainContainer>
        </AppContainer>
    )
}
