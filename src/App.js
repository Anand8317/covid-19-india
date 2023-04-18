import './App.css';
import { Routes, Route } from 'react-router-dom';
import Covid from './components/Covid';
import CovidCard from './components/CovidCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Covid />} />
        <Route path="/country/:title" element={<CovidCard />} />
      </Routes>
    </div>
  );
}

export default App;
