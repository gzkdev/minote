import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import GlobalStyles from "./components/GlobalStyles";
import Notes from "./components/Notes/Notes";
import SearchBar from "./components/SearchBar/SearchBar";
import { NotesProvider } from "./NotesContext";
import AppContainer from "./components/AppContainer/AppContainer";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <SearchBar />
      <AppContainer>
        <Notes />
      </AppContainer>
      <AddNoteForm />
    </NotesProvider>
  );
}

export default App;
