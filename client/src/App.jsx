import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StudentCrud from "./pages/StudentCrud";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentCrud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
