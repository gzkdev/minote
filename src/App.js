import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotesProvider } from "./NotesContext";
import GlobalStyles from "./components/GlobalStyles";
import Menu from "./components/Menu";
import { Home, Favorites, Trash, AddNote, Note } from "./Pages";
import AppContainer from "./components/styled/AppContainer.styled";
import Notification from "./components/Notification";

function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <GlobalStyles />
        <AppContainer>
          <Notification />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-note" element={<AddNote />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="note/:id" element={<Note />} />
            <Route path="favorites/note/:id" element={<Note />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </AppContainer>
      </NotesProvider >
    </BrowserRouter>
  );
}

export default App;
