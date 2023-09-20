import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/register/Register.jsx';
import Shop from './components/shop/shop.jsx';
import CartContent from './components/cart/cartContent.jsx';
import DataProvider from './components/context/dataContext.js';
import Products from './components/shop2/Products.jsx';
import Headers from './components/shop2/shopheader.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
              
              <Route path="/home" element={<>
                <Header />
                <Main />
                <Footer />
              </>} />


              <Route path="/login" element={<>
                
                <Login />

              </>} />

              <Route path="/register" element={<>
                
                <Register />

              </>} />

              <Route path="/shop2" element={<>
                
                <Shop />
                <Footer />
                
              </>} />
              <Route path="/cart" element={<>
                
                <Headers />
                <DataProvider />
                <CartContent />
                
              </>} />
              <Route path="/shop" element={<>
                
                <Headers />
                <Products />
                <Footer />
                
              </>} />
          </Routes>
          
        </BrowserRouter>
      </DataProvider>
    </div>
    
  );
}

export default App;
