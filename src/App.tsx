import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { PageNotFound } from "./pages/Error/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
