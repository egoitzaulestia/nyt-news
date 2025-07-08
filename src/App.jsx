import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import List from "./pages/List";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
