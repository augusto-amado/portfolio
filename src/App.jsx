import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import TenxDevPage from "./pages/projects/TenxDevPage";
import TemplateNodePage from "./pages/projects/TemplateNodePage";
import NavinhazinhaPage from "./pages/projects/NavinhazinhaPage";
import AiGatewayPage from "./pages/projects/AiGatewayPage";
import RagServicePage from "./pages/projects/RagServicePage";

function App() {
  return (
    <div className="App dark bg-[#050505]">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/10xdev" element={<TenxDevPage />} />
          <Route path="/project/10xmkt" element={<Navigate to="/" replace />} />
          <Route path="/project/template-nodejs" element={<TemplateNodePage />} />
          <Route path="/project/navinhazinha" element={<NavinhazinhaPage />} />
          <Route path="/project/ai-gateway" element={<AiGatewayPage />} />
          <Route path="/project/rag-service" element={<RagServicePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
