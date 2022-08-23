import { useState } from 'react';

import FormSearchBar from './FormSearchBar';

import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import './style.css';

function Logo() {
  return (
    <Link to="/" className="tech-store-logo">
      <h1>
        Tech Store<span>.</span>
      </h1>
    </Link>
  )
}

function Cart() {
  const [cartAmout, setCartAmout] = useState(0);

  return (
    <button className="btn-cart" onClick={() => setCartAmout(prevAmout => prevAmout + 1)}>
      <HiOutlineShoppingCart size={35} />
      <span className="cart-amount">
        {cartAmout}
      </span>
    </button>
  )
}

export default function Header() {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <div className="container-tools">
        <div>
          <FormSearchBar />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </header>
  )
}