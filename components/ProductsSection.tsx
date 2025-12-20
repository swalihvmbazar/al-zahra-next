'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const products = [
    {
      category: 'insulation',
      title: 'Insulation Solutions',
      desc: 'Premium thermal and acoustic insulation materials for optimal energy efficiency',
      icon: 'ri-temp-cold-line',
      image: 'https://readdy.ai/api/search-image?query=industrial%20hvac%20thermal%20insulation%20foam%20material%20rolls%20professional%20installation%20clean%20white%20background%20product%20photography&width=600&height=400&seq=prod-insulation&orientation=landscape'
    },
    {
      category: 'jacketing',
      title: 'Aluminium Jacketing',
      desc: 'Durable aluminium cladding and connectors for duct protection',
      icon: 'ri-shield-line',
      image: 'https://readdy.ai/api/search-image?query=aluminum%20jacketing%20sheets%20hvac%20duct%20cladding%20material%20silver%20metallic%20industrial%20product%20clean%20background&width=600&height=400&seq=prod-jacketing&orientation=landscape'
    },
    {
      category: 'vibration',
      title: 'Vibration Control',
      desc: 'Advanced vibration isolation and noise reduction systems',
      icon: 'ri-sound-module-line',
      image: 'https://readdy.ai/api/search-image?query=hvac%20vibration%20isolator%20mounts%20rubber%20dampers%20industrial%20equipment%20accessories%20clean%20product%20shot&width=600&height=400&seq=prod-vibration&orientation=landscape'
    },
    {
      category: 'duct',
      title: 'Duct Accessories',
      desc: 'Complete range of ductwork components and fittings',
      icon: 'ri-git-branch-line',
      image: 'https://readdy.ai/api/search-image?query=hvac%20air%20duct%20accessories%20connectors%20dampers%20grilles%20metal%20components%20industrial%20product%20photography&width=600&height=400&seq=prod-duct&orientation=landscape'
    },
    {
      category: 'ac-parts',
      title: 'A/C Parts',
      desc: 'Genuine air conditioning spare parts and components',
      icon: 'ri-settings-3-line',
      image: 'https://readdy.ai/api/search-image?query=air%20conditioning%20spare%20parts%20compressor%20fan%20motor%20hvac%20components%20professional%20product%20display&width=600&height=400&seq=prod-acparts&orientation=landscape'
    },
    {
      category: 'copper',
      title: 'Copper Pipes & Fittings',
      desc: 'High-grade copper tubing and connection fittings',
      icon: 'ri-water-flash-line',
      image: 'https://readdy.ai/api/search-image?query=copper%20pipes%20tubes%20hvac%20refrigeration%20fittings%20coils%20shiny%20metal%20industrial%20product%20clean%20background&width=600&height=400&seq=prod-copper&orientation=landscape'
    },
    {
      category: 'freon',
      title: 'Freon Gas',
      desc: 'Certified refrigerant gases for all AC systems',
      icon: 'ri-flask-line',
      image: 'https://readdy.ai/api/search-image?query=refrigerant%20gas%20cylinder%20freon%20r410a%20r134a%20hvac%20cooling%20agent%20industrial%20product%20clean%20background&width=600&height=400&seq=prod-freon&orientation=landscape'
    },
    {
      category: 'sealants',
      title: 'Sealants & Adhesives',
      desc: 'Professional-grade sealing and bonding solutions',
      icon: 'ri-drop-line',
      image: 'https://readdy.ai/api/search-image?query=industrial%20sealant%20adhesive%20tubes%20hvac%20duct%20sealing%20products%20professional%20grade%20clean%20product%20shot&width=600&height=400&seq=prod-sealants&orientation=landscape'
    },
    {
      category: 'tape',
      title: 'Duct Tape & Coatings',
      desc: 'Heavy-duty tapes and protective coatings',
      icon: 'ri-sticky-note-line',
      image: 'https://readdy.ai/api/search-image?query=aluminum%20foil%20duct%20tape%20rolls%20hvac%20sealing%20tape%20industrial%20adhesive%20product%20photography&width=600&height=400&seq=prod-tape&orientation=landscape'
    },
    {
      category: 'flexible',
      title: 'Flexible Ducts',
      desc: 'Insulated flexible ducting for air distribution',
      icon: 'ri-loop-right-line',
      image: 'https://readdy.ai/api/search-image?query=flexible%20hvac%20duct%20insulated%20air%20distribution%20tube%20silver%20industrial%20ventilation%20product&width=600&height=400&seq=prod-flexible&orientation=landscape'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'insulation', name: 'Insulation' },
    { id: 'jacketing', name: 'Jacketing' },
    { id: 'vibration', name: 'Vibration Control' },
    { id: 'duct', name: 'Duct Accessories' },
    { id: 'ac-parts', name: 'A/C Parts' },
    { id: 'copper', name: 'Copper Pipes' },
    { id: 'freon', name: 'Freon Gas' },
    { id: 'sealants', name: 'Sealants' },
    { id: 'tape', name: 'Tape & Coatings' },
    { id: 'flexible', name: 'Flexible Ducts' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600">Comprehensive HVAC solutions for every project need</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${selectedCategory === cat.id
                  ? 'bg-[#06529e] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full">
                    <i className={`${product.icon} text-2xl text-[#06529e]`}></i>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{product.desc}</p>
                  <button className="inline-flex items-center text-[14px] font-semibold text-[#06529e] hover:text-[#0a6bc2] transition-colors cursor-pointer">
                    Learn More
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
