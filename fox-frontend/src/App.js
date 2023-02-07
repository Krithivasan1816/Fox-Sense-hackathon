import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import Profile from './profile';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
  );
}

export default App;
