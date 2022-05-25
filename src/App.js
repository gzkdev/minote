import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotesProvider } from "./NotesContext";
import GlobalStyles from "./components/GlobalStyles";
import Menu from "./components/Menu";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Trash from "./Pages/Trash";
import AppContainer from "./components/styled/AppContainer.styled";

function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <GlobalStyles />
        <AppContainer>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </AppContainer>
      </NotesProvider >
    </BrowserRouter>
  );
}

export default App;
