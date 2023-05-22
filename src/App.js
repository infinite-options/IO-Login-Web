import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./Homepage";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import EmailLogin from "./Login/EmailLogin";
import EmailSignup from "./Signup/EmailSignup";
import GoogleLogin from "./Login/GoogleLogin";
import GoogleSignup from "./Signup/GoogleSignup";

function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/email-login" element={<EmailLogin />} />
          <Route path="/email-signup" element={<EmailSignup />} />

          <Route path="/google-login" element={<GoogleLogin />} />
          <Route path="/google-signup" element={<GoogleSignup />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
