import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles";
import { NotesProvider } from "./NotesContext";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
