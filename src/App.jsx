import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  Login,
  Navbar,
  Register,
  Article,
  Editor,
  Profile,
  Settings,
  Footer,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/editor/:slug" element={<Editor />} />
        <Route path="/article/:username" element={<Profile />} />
        <Route path="/profile/:slug" element={<Article />} />
        <Route path="/profile/:username/favorites" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
