import MainContainer from "../components/MainContainer";
import AppContainer from "../components/AppContainer/AppContainer";
import SideBar from "../components/SideBar/SideBar";
import AddNoteForm from "../components/AddNoteForm/AddNoteForm";

export default function Home() {
    return (
        <>
            <AppContainer>
                <SideBar />
                <MainContainer />
            </AppContainer>
            <AddNoteForm />
        </>
    );
}
