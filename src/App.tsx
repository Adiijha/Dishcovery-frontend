import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/landingPage/Header';
import Hero from './components/landingPage/Hero';
import Footer from './components/landingPage/Footer';
import Dashboard from './components/dashboard/Dashboard';
import RecipeDetails from './components/dashboard/RecipeDetails';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/recipes" element={<Dashboard />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
