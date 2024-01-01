import {Container} from "react-bootstrap";
import Header from "./components/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )

}