import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import AddSeries from "./pages/addSeries";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/add-series" element={<AddSeries />} />
      </Routes>
    </>
  );
}

export default App;
