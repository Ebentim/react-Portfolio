import logo from './assets/logo.jpg'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Resume from './components/Resume';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
function App() {
  const location = useLocation()
  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "about" },
    { name: "Experience", path: "/experience" },
    { name: "Resume", path: "/resume" },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav>
          <ul>
            {nav.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer>
        <div>&copy; Timilehin Olayuwa Ebenezer</div>
      </footer>
    </div>
  );
}

export default App;
