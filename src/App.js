import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles";
import { NotesProvider } from "./NotesContext";

function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <GlobalStyles />
        <Routes>
          <Route />
        </Routes>
      </NotesProvider >
    </BrowserRouter>
  );
}

export default App;
