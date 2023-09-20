import React from 'react';
import './shop.css'
import img1 from '../multimedia/img1.JPG';
import img2 from '../multimedia/img2.JPG';
import img3 from '../multimedia/img3.JPG';
import img4 from '../multimedia/img4.JPG';
import img5 from '../multimedia/img5.JPG';
import img6 from '../multimedia/img6.JPG';
import img7 from '../multimedia/img7.JPG';
import img8 from '../multimedia/img8.JPG';
import img9 from '../multimedia/img9.JPG';
import logoimg from '../multimedia/RheinLogo.svg';

function Shop() {
    return (
    <body className='bodyshop'>
    <header className='headshop' id="header">
        <a href="/home" className='ahome'><h2 className='h1shop'>Home</h2></a> 
        <a href="/cart"><img className="carrito" src={logoimg} alt="carrito" /></a>
    </header>
    <div id="contenedor" className="contenedor">
        <div>
            <img className='imgshop' src={img1} alt="producto 1" />
            <div className="informacion">
                <p>Producto 1</p>
                <p className="precio">$199<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img2} alt="producto 2" />
            <div className="informacion">
                <p>Producto 2</p>                   
                <p className="precio">$299<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img3} alt="producto 3" />
            <div className="informacion">
                <p>Producto 3</p>                   
                <p className="precio">$399<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img4} alt="producto 4" />
            <div className="informacion">
                <p>Producto 4</p>                   
                <p className="precio">$499<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img5} alt="producto 5" />
            <div className="informacion">
                <p>Producto 5</p>                   
                <p className="precio">$599<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img6} alt="producto 6" />
            <div className="informacion">
                <p>Producto 6</p>                   
                <p className="precio">$699<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img7} alt="producto 7" />
            <div className="informacion">
                <p>Producto 7</p>                   
                <p className="precio">$799<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img8} alt="producto 8" />
            <div className="informacion">
                <p>Producto 8</p>                   
                <p className="precio">$899<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
        <div>
            <img className='imgshop' src={img9} alt="producto 9" />
            <div className="informacion">
                <p>Producto 9</p>                   
                <p className="precio">$999<span>.99</span></p>
                <button>Comprar</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
    </body>
  );
};


export default Shop;