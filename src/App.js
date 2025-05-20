import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AVStar from './Component/AVStar';

function App() {

  return (
    <div className="App">
      <AVStar />
    </div>
  );
}

export default App;
