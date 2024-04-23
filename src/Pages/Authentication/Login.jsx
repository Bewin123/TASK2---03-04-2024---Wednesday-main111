import React, { useState } from 'react';

// Import images for phones
import phoneImage1 from './images/1.jpeg';
import phoneImage2 from './images/2.jpeg';
import phoneImage3 from './images/3.jpeg';
import phoneImage4 from './images/4.jpeg';
import phoneImage5 from './images/5.jpeg';
import phoneImage6 from './images/6.jpeg';
import phoneImage7 from './images/7.jpeg';
import phoneImage8 from './images/8.jpeg';
import phoneImage9 from './images/9.jpeg';
import phoneImage10 from './images/10.jpeg';
import phoneImage11 from './images/11.jpeg';
import phoneImage12 from './images/12.jpeg';

function PhoneShoppingMart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (productName) => {
    const newItem = { name: productName };
    setCartItems([...cartItems, newItem]);
    setCartQuantity(cartQuantity + 1);
  };

  const removeFromCart = (productName) => {
    const updatedCart = cartItems.filter(item => item.name !== productName);
    setCartItems(updatedCart);
    setCartQuantity(cartQuantity - 1);
  };

  const isInCart = (productName) => {
    return cartItems.some(item => item.name === productName);
  };

  const phoneData = [
    { name: 'iPhone 15 Pro', price: '₹1,50,000.00', image: phoneImage1 },
    { name: 'iPhone 15', price: '₹79,900.00', image: phoneImage2 },
    { name: 'Samsung Galaxy S24 Ultra 5G AI', price: '₹1,59,999', image: phoneImage3 },
    { name: 'Samsung Galaxy A54 5G', price: '₹35,499', image: phoneImage4 },
    { name: 'OnePlus 10T 5G (Moonstone Black, 12GB RAM, 256GB Storage)', price: '₹55,999', image: phoneImage5 },
    { name: 'OnePlus 10 Pro 5G (Emerald Forest, 8GB RAM, 128GB Storage)', price: '₹66,999', image: phoneImage6 },
    { name: 'Redmi Note 13 Pro+ (Fusion Purple, 8GB RAM, 256GB Storage)', price: '₹31,999', image: phoneImage7 },
    { name: 'Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage)', price: '₹17,999', image: phoneImage8 },
    { name: 'iQOO Neo 7 Pro 5G (Fearless Flame, 8GB RAM, 128GB Storage)', price: '₹30,999', image: phoneImage9 },
    { name: 'iQOO 12 5G (Legend, 16GB RAM, 512GB Storage)', price: '₹57,999', image: phoneImage10 },
    { name: 'realme narzo 60 5G (Cosmic Black, 8GB+128GB)', price: '₹14,999', image: phoneImage11 },
    { name: 'iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage)', price: '₹11,999', image: phoneImage12 }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">PHONE MART</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">ABOUT</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">SHOP</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">ALL PHONES</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">POPULAR PHONES</a></li>
                  <li><a className="dropdown-item" href="#!">NEW ARRIVALS</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                SHOPPING CART
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartQuantity}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">WELCOME TO PHONE SHOPPING</h1>
            <p className="lead fw-normal text-white-50 mb-0">EXPLORE THE LATEST COLLECTIONS</p>
          </div>
        </div>
      </header>

      {/* Phone Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {phoneData.map((phone, index) => (
              <div key={index} className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src={phone.image} alt={phone.name} />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{phone.name}</h5>
                      <p>{phone.price}</p>
                      {isInCart(phone.name) ? (
                        <button className="btn btn-outline-danger" onClick={() => removeFromCart(phone.name)}>
                          Remove from Cart
                        </button>
                      ) : (
                        <button className="btn btn-outline-dark" onClick={() => addToCart(phone.name)}>
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PhoneShoppingMart;
















