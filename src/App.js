import './App.css';
import { Routes, Route } from 'react-router-dom';
import Covid from './components/Covid';
import CovidDetail from './components/CovidDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Covid />} />
        <Route path="/Covid/:title" element={<CovidDetail />} />
      </Routes>
    </div>
  );
}

export default App;
