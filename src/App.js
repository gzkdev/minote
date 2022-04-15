import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import GlobalStyles from "./components/GlobalStyles";
import SearchBar from "./components/SearchBar/SearchBar";
import { NotesProvider } from "./NotesContext";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <SearchBar />
      <AddNoteForm />
    </NotesProvider>
  );
}

export default App;
