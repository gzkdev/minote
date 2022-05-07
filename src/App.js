import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles";
import { NotesProvider } from "./NotesContext";
import Home from "./Pages/Home";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
