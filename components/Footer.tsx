'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/61208a66775c73bc0685f54b7678d959.png" 
              alt="Company Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for premium HVAC solutions and AC parts across Saudi Arabia.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-[#06529e] rounded-full transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-[#06529e] rounded-full transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-[#06529e] rounded-full transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-[#06529e] rounded-full transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#c59241] transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#c59241] transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/products" className="hover:text-[#c59241] transition-colors cursor-pointer">Products</Link></li>
              <li><Link href="/brands" className="hover:text-[#c59241] transition-colors cursor-pointer">Brands</Link></li>
              <li><Link href="/projects" className="hover:text-[#c59241] transition-colors cursor-pointer">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#c59241] transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-[#c59241] transition-colors cursor-pointer">Insulation Solutions</Link></li>
              <li><Link href="/products" className="hover:text-[#c59241] transition-colors cursor-pointer">Aluminium Jacketing</Link></li>
              <li><Link href="/products" className="hover:text-[#c59241] transition-colors cursor-pointer">Vibration Control</Link></li>
              <li><Link href="/products" className="hover:text-[#c59241] transition-colors cursor-pointer">Duct Accessories</Link></li>
              <li><Link href="/products" className="hover:text-[#c59241] transition-colors cursor-pointer">A/C Parts</Link></li>
              <li><Link href="/products" className="hover:text-[#c59241] transition-colors cursor-pointer">Copper Pipes & Fittings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-[#c59241] mt-1 mr-2"></i>
                <span className="text-sm">Saudi Arabia</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line text-[#c59241] mr-2"></i>
                <span className="text-sm">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line text-[#c59241] mr-2"></i>
                <span className="text-sm">info@company.com</span>
              </li>
              <li className="flex items-start">
                <i className="ri-time-line text-[#c59241] mt-1 mr-2"></i>
                <span className="text-sm">Sun - Thu: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 AC Parts & HVAC Trading Company. All rights reserved.
          </p>
          <Link href="https://papernpencil.com" target="_blank" className="text-sm text-gray-400 hover:text-[#c59241] transition-colors cursor-pointer">
            Powered by Paper N Pencil
          </Link>
        </div>
      </div>
    </footer>
  );
}