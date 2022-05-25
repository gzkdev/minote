import SearchBar from "../components/SearchBar/SearchBar"
import HomeStyled from "../components/styled/home.styled"

const Home = () => {
    return (
        <HomeStyled>
            <span>Hello dear, 👋🏾</span>
            <h1>All Notes</h1>
            <SearchBar />
        </HomeStyled>
    )
}

export default Home