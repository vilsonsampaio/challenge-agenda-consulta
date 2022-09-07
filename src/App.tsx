import { BrowserRouter, Route, Routes } from "react-router-dom";

import Search from "./pages/Search";
import User from "./pages/User";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="user/:username" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
