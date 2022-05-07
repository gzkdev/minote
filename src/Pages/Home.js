import MainContainer from "../components/MainContainer";
import AppContainer from "../components/AppContainer/AppContainer";
import SideBar from "../components/SideBar/SideBar";
import Notes from "../components/Notes/Notes";
import SearchBar from "../components/SearchBar/SearchBar";
// import AddNoteForm from "../components/AddNoteForm/AddNoteForm";

export default function Home() {
    return (
        <>
            <AppContainer>
                <SideBar />
                <MainContainer>
                    <SearchBar />
                    <Notes />
                </MainContainer>
            </AppContainer>
            {/* <AddNoteForm /> */}
        </>
    );
}
