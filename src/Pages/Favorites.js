import { PageContainer, NotesContainer } from "../components/styled"
import SearchBar from "../components/SearchBar/SearchBar"
import { UseNotesContext } from "../NotesContext"
import NoteItemFavorite from "../components/Notes/NoteItem.favorite"

const Favorites = () => {
    const { favoriteNotes } = UseNotesContext()
    return (
        <PageContainer>
            <h1 className="body__text">Favorite Notes</h1>
            <SearchBar />
            <NotesContainer>
                {favoriteNotes.length > 0 && (favoriteNotes.map(note => <NoteItemFavorite key={note.id} data={note} />))
                }
            </NotesContainer>
        </PageContainer>
    )
}

export default Favorites