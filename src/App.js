import GlobalStyles from "./components/GlobalStyles";
import SearchBar from "./components/SearchBar/SearchBar";
import { NotesProvider } from "./NotesContext";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <SearchBar />
    </NotesProvider>
  );
}

export default App;
