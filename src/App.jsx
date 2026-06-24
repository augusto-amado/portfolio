import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import TenxDevPage from "./pages/projects/TenxDevPage";
import TenxMktPage from "./pages/projects/TenxMktPage";
import TemplateNodePage from "./pages/projects/TemplateNodePage";
import NavinhazinhaPage from "./pages/projects/NavinhazinhaPage";

function App() {
  return (
    <div className="App dark bg-[#050505]">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/10xdev" element={<TenxDevPage />} />
          <Route path="/project/10xmkt" element={<TenxMktPage />} />
          <Route path="/project/template-nodejs" element={<TemplateNodePage />} />
          <Route path="/project/navinhazinha" element={<NavinhazinhaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
