import FloatingButton from "../components/FloatingButton"
import Notes from "../components/Notes/Notes"
import SearchBar from "../components/SearchBar/SearchBar"
import HomeStyled from "../components/styled/home.styled"

const Home = () => {
    return (
        <HomeStyled>
            <span className="body__text">Hello dear, 👋🏾</span>
            <h1 className="body__text">All Notes</h1>
            <SearchBar />
            <Notes />
            <FloatingButton />
        </HomeStyled>
    )
}

export default Home