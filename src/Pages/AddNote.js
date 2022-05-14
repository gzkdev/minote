
import SideBar from "../components/SideBar/SideBar"
import SearchBar from "../components/SearchBar/SearchBar"
import NoteForm from "../components/AddNoteForm/NoteForm"

export default function AddNote() {
    return (
        <>
            <SideBar />
            <SearchBar page="Add note" />
            <NoteForm />
        </>
    )
}
