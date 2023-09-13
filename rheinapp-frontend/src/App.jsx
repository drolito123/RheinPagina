import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Main from './components/body/main.jsx';
import Login from './components/Login/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            
            <Route path="/home" element={<>
              <Header />
              <Main />
              <Footer />
            </>} />


            <Route path="/login" element={<>

            </>} />
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
