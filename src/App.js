import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles";
import { NotesProvider } from "./NotesContext";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Note from "./Pages/Note";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="notes/:noteid" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
