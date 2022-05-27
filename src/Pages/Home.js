import { useState } from "react"
import { FloatingButton } from "../components/Atoms"
import Notes from "../components/Notes/Notes"
import SearchBar from "../components/SearchBar/SearchBar"
import HomeStyled from "../components/styled/home.styled"
import { UseNotesContext } from "../NotesContext"

const Home = () => {
    const { notes, notesArrangement } = UseNotesContext()
    let NOTE_IDs = Object.keys(notes);
    let reversed_NOTE_IDs = Object.keys(notes).reverse();
    const [searchText, setSearchText] = useState("")

    const RENDERED_NOTES = (
        notesArrangement ? reversed_NOTE_IDs : NOTE_IDs
    ).filter((note) =>
        notes[note].title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <HomeStyled>
            <span className="body__text">Hello dear, 👋🏾</span>
            <h1 className="body__text">All Notes</h1>
            <SearchBar searchFunction={setSearchText} />
            <Notes notes={notes} notesKeys={NOTE_IDs} renderNotes={RENDERED_NOTES} />
            <FloatingButton />
        </HomeStyled>
    )
}

export default Home