import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import QueueDisplay from "@/pages/QueueDisplay";
import Call from "@/pages/Call";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<QueueDisplay />} />
        <Route path="/call" element={<Call />} />
      </Routes>
    </Router>
  );
}
