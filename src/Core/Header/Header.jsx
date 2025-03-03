
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white w-full">
      <nav className="flex justify-between px-5 max-w-[105rem] mx-auto py-6 items-center">
       
        <div className="flex items-center">
          <a href="/">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"/>
          </a>
        </div>

      
        <div className={`absolute top-20 left-0 w-full bg-gray-500 md:static md:flex md:space-x-6 md:w-auto md:bg-transparent transition-all duration-300 text-white md:text-black ${
            isMenuOpen ? "flex flex-col items-center md:flex-row text-xl" : "hidden"
          }`}
        >

          <a href="/">Home</a>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <a href="/latest">Latest<span><sup className="bg-red-500 px-1 text-xs text-white rounded">Hot</sup></span></a>
          <a href="/blog">Blog</a>
          <a href="/pages">Pages</a>
          <a href="/contact">Contact</a>

        </div>

        <div className="flex items-center gap-6">
          <a href="/search"> <i className="fa-solid fa-magnifying-glass pl-3"></i></a>
          <a href="/user"><i className="fa-solid fa-user"></i></a>
          <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-bold text-2xl" aria-label="Toggle Menu">
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>

      </nav>
    </header>
  );
}

 