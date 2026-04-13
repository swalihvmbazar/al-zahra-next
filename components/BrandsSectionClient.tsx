'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

type BrandLogo = {
  url?: string | null;
  alt: string;
};

export type BrandItem = {
  id: number;
  name: string;
  logo: BrandLogo | number;
};

export default function BrandsSectionClient({ brands }: { brands: BrandItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const allBrands = [...brands, ...brands];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const getLogoUrl = (logo: BrandLogo | number): string => {
    if (typeof logo === 'object' && logo.url) return logo.url;
    return '';
  };

  const getLogoAlt = (logo: BrandLogo | number, name: string): string => {
    if (typeof logo === 'object') return logo.alt || name;
    return name;
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Brands</h2>
          <p className="text-lg text-gray-600">Authorized partnerships with leading global manufacturers</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {allBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[180px] h-[100px] bg-gray-50 rounded-lg p-5 flex items-center justify-center hover:bg-[#06529e]/5 transition-all duration-300 cursor-pointer hover:scale-110"
                style={{ filter: 'grayscale(100%)' }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; }}
              >
                {getLogoUrl(brand.logo) && (
                  <img
                    src={getLogoUrl(brand.logo)}
                    alt={getLogoAlt(brand.logo, brand.name)}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/brands"
            className="inline-block bg-[#06529e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#04437f] transition-colors whitespace-nowrap"
          >
            View All Brands
          </Link>
        </div>
      </div>
    </div>
  );
}
