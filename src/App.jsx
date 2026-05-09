import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TenxConsorciosPage from "./pages/TenxConsorciosPage";
import TenxDevPage from "./pages/TenxDevPage";
import TenxMktPage from "./pages/TenxMktPage";

function App() {
  return (
    <div className="App dark bg-[#050505]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/10xconsorcios" element={<TenxConsorciosPage />} />
          <Route path="/project/10xdev" element={<TenxDevPage />} />
          <Route path="/project/10xmkt" element={<TenxMktPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
