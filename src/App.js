import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import GlobalStyles from "./components/GlobalStyles";
import Notes from "./components/Notes/Notes";
import SearchBar from "./components/SearchBar/SearchBar";
import { NotesProvider } from "./NotesContext";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <SearchBar />
      <Notes />
      <AddNoteForm />
    </NotesProvider>
  );
}

export default App;
