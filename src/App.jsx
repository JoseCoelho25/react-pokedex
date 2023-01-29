import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DetailsPage from './Pages/DetailsPage';
import Homepage from "./Pages/HomePage";
import { useEffect } from 'react';
import ContactPage from './Pages/ContactPage';
import SuggestionPage from './Pages/SuggestionPage';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/pokemon/:id" element={<DetailsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/suggestion" element={<SuggestionPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
