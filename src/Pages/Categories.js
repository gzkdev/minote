import AppContainer from "../components/AppContainer/AppContainer";
import SideBar from "../components/SideBar/SideBar";
import MainContainer from "../components/MainContainer";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Categories() {
    return (
        <>
            <AppContainer>
                <SideBar />
                <MainContainer>
                    <SearchBar />
                    <br /><br /><br />
                    <h1>Categories</h1>
                </MainContainer>
            </AppContainer>
        </>
    )
}
