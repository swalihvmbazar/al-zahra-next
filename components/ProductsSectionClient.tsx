'use client';

import { useRef, useState } from 'react';

type ProductImage = {
  url?: string | null;
  alt: string;
};

export type ProductItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
  image: ProductImage | number;
};

const categories = [
  { id: 'all', name: 'All Products', icon: 'ri-grid-line' },
  { id: 'insulation', name: 'Insulation', icon: 'ri-temp-cold-line' },
  { id: 'jacketing', name: 'Jacketing', icon: 'ri-shield-line' },
  { id: 'vibration', name: 'Vibration Control', icon: 'ri-sound-module-line' },
  { id: 'duct', name: 'Duct Accessories', icon: 'ri-git-branch-line' },
  { id: 'ac-parts', name: 'A/C Parts', icon: 'ri-settings-3-line' },
  { id: 'copper', name: 'Copper Pipes', icon: 'ri-water-flash-line' },
  { id: 'freon', name: 'Freon Gas', icon: 'ri-flask-line' },
  { id: 'sealants', name: 'Sealants', icon: 'ri-drop-line' },
  { id: 'tape', name: 'Tape & Coatings', icon: 'ri-sticky-note-line' },
  { id: 'flexible', name: 'Flexible Ducts', icon: 'ri-loop-right-line' },
];

export default function ProductsSectionClient({ products }: { products: ProductItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    const el = scrollRef.current?.querySelector(`[data-cat="${catId}"]`) as HTMLElement | null;
    el?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  };

  const getImageUrl = (image: ProductImage | number): string => {
    if (typeof image === 'object' && image.url) return image.url;
    return '';
  };

  const getImageAlt = (image: ProductImage | number, title: string): string => {
    if (typeof image === 'object') return image.alt || title;
    return title;
  };

  return (
    <>
      {/* Hero section heading */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Product Range</h2>
            <p className="text-base md:text-lg text-gray-600">Comprehensive HVAC solutions for every project need</p>
          </div>
        </div>
      </section>

      {/* ── Sticky Category Filter Bar ── */}
      <div className="sticky top-16 md:top-20 z-40">
        <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative py-2.5 md:py-3">

              {/* Left fade-out — mobile scroll hint */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/95 to-transparent z-10 md:hidden" />
              {/* Right fade-out — mobile scroll hint */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/95 to-transparent z-10 md:hidden" />

              {/* Pill row */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto md:flex-wrap gap-2 md:gap-2 md:justify-center scrollbar-hide px-4 sm:px-6 lg:px-12"
              >
                {categories.map((cat) => {
                  const count = cat.id === 'all'
                    ? products.length
                    : products.filter(p => p.category === cat.id).length;
                  const isActive = selectedCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      data-cat={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className={[
                        'group relative flex-shrink-0 flex items-center gap-1.5',
                        'px-3.5 md:px-4 py-1.5 md:py-2 rounded-full',
                        'text-[12px] md:text-[13px] font-semibold whitespace-nowrap cursor-pointer select-none',
                        'transition-all duration-200 ease-out',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06529e] focus-visible:ring-offset-1',
                        isActive
                          ? 'bg-gradient-to-br from-[#0663be] to-[#054a8c] text-white shadow-lg shadow-blue-300/30 scale-[1.04]'
                          : 'bg-gray-100/90 text-gray-500 hover:bg-gray-200 hover:text-gray-800 hover:scale-[1.02]',
                      ].join(' ')}
                    >
                      <i className={[
                        cat.icon,
                        'text-[13px] md:text-[14px] transition-colors duration-200',
                        isActive ? 'text-white/90' : 'text-gray-400 group-hover:text-gray-600',
                      ].join(' ')} />

                      <span>{cat.name}</span>

                      <span className={[
                        'flex items-center justify-center min-w-[18px] h-[18px] px-1',
                        'rounded-full text-[9px] font-bold leading-none transition-all duration-200',
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white text-[#06529e] border border-gray-200',
                      ].join(' ')}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No products found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
                    {getImageUrl(product.image) && (
                      <img
                        src={getImageUrl(product.image)}
                        alt={getImageAlt(product.image, product.title)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-5 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{product.title}</h3>
                    <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-4 md:mb-6">{product.description}</p>
                    {/* <button className="inline-flex items-center text-[13px] md:text-[14px] font-semibold text-[#06529e] hover:text-[#0a6bc2] transition-colors cursor-pointer">
                      Learn More
                      <i className="ri-arrow-right-line ml-2"></i>
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
