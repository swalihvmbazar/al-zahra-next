'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/61208a66775c73bc0685f54b7678d959.png" 
              alt="Company Logo" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
              Products
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
              Brands
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="bg-[#06529e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#04437f] transition-colors whitespace-nowrap"
            >
              Request a Quote
            </Link>
          </div>

          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
                About Us
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
                Products
              </Link>
              <Link href="/brands" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
                Brands
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#06529e] font-medium transition-colors whitespace-nowrap">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="bg-[#06529e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#04437f] transition-colors text-center whitespace-nowrap"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}