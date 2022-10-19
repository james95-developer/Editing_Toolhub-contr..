
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Leaderboard from './pages/Leaderboard';
import Recordsdashboard from './pages/Recordsdashboard';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>

        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path = "/Leaderboard" element={<Leaderboard/>} />
          <Route  path = "/Recordsdashboard" element={<Recordsdashboard/>} />
        </Routes>
        
        <Footer/>

      </Router>
    </div>
  )
}

export default App;
 