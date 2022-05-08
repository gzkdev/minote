import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles";
import { NotesProvider } from "./NotesContext";
import Home from "./Pages/Home";
import Note from "./Pages/NotePage";
import AddNote from "./Pages/AddNote";
import TrashNotes from "./Pages/TrashNotes";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notes/:noteid" element={<Note />} />
          <Route path="add_note" element={<AddNote />} />
          <Route path="trash" element={<TrashNotes />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
