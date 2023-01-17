import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Browse from "./pages/browse/Browse";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
