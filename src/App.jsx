import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
