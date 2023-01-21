import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './Pages/DetailsPage';
import Homepage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/pokemon/:id" element={<DetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
