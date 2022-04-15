import GlobalStyles from "./components/GlobalStyles";
import { NotesProvider } from "./NotesContext";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <h1>Minotes</h1>
    </NotesProvider>
  );
}

export default App;
