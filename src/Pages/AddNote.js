import AppContainer from "../components/AppContainer/AppContainer"
import MainContainer from "../components/MainContainer"
import SideBar from "../components/SideBar/SideBar"
import SearchBar from "../components/SearchBar/SearchBar"

export default function AddNote() {
    return (
        <AppContainer>
            <SideBar />
            <MainContainer>
                <SearchBar />
                <section>
                    <h1>Add new note</h1>
                </section>
            </MainContainer>
        </AppContainer>
    )
}
