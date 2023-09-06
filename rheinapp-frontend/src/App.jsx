import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx';
import Main from './components/body/main.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            
            <Route path="/home" element={<>
              <Header />
              <Main />
            </>} />

        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
