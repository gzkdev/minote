import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles";
import { NotesProvider } from "./NotesContext";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </NotesProvider >
  );
}

export default App;
