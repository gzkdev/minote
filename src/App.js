import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import GlobalStyles from "./components/GlobalStyles";
// import Notes from "./components/Notes/Notes";
// import SearchBar from "./components/SearchBar/SearchBar";
import { NotesProvider } from "./NotesContext";
import AppContainer from "./components/AppContainer/AppContainer";
import SideBar from "./components/SideBar/SideBar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <AppContainer>
        <SideBar />
        <MainContainer />
      </AppContainer>
      <AddNoteForm />
    </NotesProvider>
  );
}

export default App;
