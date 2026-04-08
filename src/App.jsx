import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlavancaDashPage from "./pages/AlavancaDashPage";
import TenxDevPage from "./pages/TenxDevPage";

function App() {
  return (
    <div className="App dark bg-[#050505]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/alavanca-dash" element={<AlavancaDashPage />} />
          <Route path="/project/10xdev" element={<TenxDevPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
