import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialPills from './components/SocialPills';
import Contact from './pages/Contact';
import { ThemeProvider } from './utils/ThemeContext';

import DynamicFavicon from './components/DynamicFavicon';

function App() {
  return (
    <ThemeProvider>
      <DynamicFavicon />
      <Router>
        <div className="min-h-screen">

          <Navbar />
          <SocialPills />

          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;