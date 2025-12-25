'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import BrandsSection from '@/components/BrandsSection';
import ProductsSection from '@/components/ProductsSection';

export default function Home() {
  const [currentBrand, setCurrentBrand] = useState(0);

  const brands = [
    'Zarco', 'Mueller', 'Supaflex', 'Abro', 'Airmaster', 
    'Kimmco', 'Honeywell', 'Armstrong', 'Thermoflex'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrand((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const industries = [
    { name: 'Airports & Metro Systems', icon: 'ri-plane-line' },
    { name: 'Hospitals & Healthcare', icon: 'ri-hospital-line' },
    { name: 'Commercial Malls & Hotels', icon: 'ri-building-line' },
    { name: 'Schools & Universities', icon: 'ri-school-line' },
    { name: 'Factories & Industrial Facilities', icon: 'ri-factory-line' },
    { name: 'Residential & Contracting Works', icon: 'ri-home-line' }
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20industrial%20HVAC%20air%20conditioning%20system%20installation%20in%20large%20commercial%20building%20with%20exposed%20ductwork%2C%20pipes%2C%20and%20professional%20equipment%20in%20clean%20industrial%20environment%20with%20blue%20lighting%20and%20technical%20atmosphere&width=1920&height=1080&seq=hero001&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white mb-6 animate-fade-in">
              Complete HVAC Solutions<br />for Every Industry
            </h1>
            <p className="text-lg text-white/95 mb-10">
              Premium AC parts, trusted global brands, and dependable HVAC supply across Saudi Arabia
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-[#c59241] text-white px-8 py-4 rounded-lg font-semibold  hover:bg-[#b38237] transition-colors whitespace-nowrap"
              >
                Explore Products
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-[#06529e] px-8 py-4 rounded-lg font-semibold  hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-time-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Years</h3>
              <p className="text-gray-600">Industry Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-government-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted</h3>
              <p className="text-gray-600">Govt. & Private Projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Authorized</h3>
              <p className="text-gray-600">Brand Partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-map-2-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pan-Saudi</h3>
              <p className="text-gray-600">Supply Network</p>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Reliable HVAC Trading Partner</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are a leading supplier of premium HVAC materials and air conditioning spare parts across Saudi Arabia. With over a decade of industry expertise, we serve contractors, engineers, and project developers with top-quality products from globally recognized brands. Our comprehensive inventory includes insulation solutions, duct accessories, copper pipes, refrigerants, and complete HVAC system components. We pride ourselves on delivering exceptional service, technical support, and reliable supply chain management for projects of all scales—from residential installations to large-scale government and industrial developments.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-[#06529e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#04437f] transition-colors whitespace-nowrap"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      <ProductsSection />

      <BrandsSection />

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Trusted HVAC solutions across diverse sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#c59241]/10 rounded-full mb-4 group-hover:bg-[#c59241] transition-colors">
                  <i className={`${industry.icon} text-3xl text-[#c59241] group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Highlights</h2>
            <p className="text-lg text-gray-600">Delivering excellence across major infrastructure projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20metro%20railway%20station%20interior%20with%20advanced%20HVAC%20ventilation%20systems%2C%20clean%20architectural%20design%2C%20bright%20lighting%2C%20and%20professional%20infrastructure%20showing%20air%20conditioning%20ducts%20and%20climate%20control%20equipment&width=600&height=800&seq=proj001&orientation=portrait"
                alt="Metro Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Metro Systems</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20exterior%20with%20advanced%20medical%20facility%20architecture%2C%20clean%20white%20facade%2C%20professional%20healthcare%20infrastructure%20with%20visible%20HVAC%20systems%20and%20climate%20control%20installations&width=600&height=800&seq=proj002&orientation=portrait"
                alt="Hospital Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Healthcare Facilities</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Luxury%20shopping%20mall%20interior%20with%20modern%20architecture%2C%20multiple%20floors%2C%20elegant%20design%2C%20advanced%20air%20conditioning%20systems%2C%20professional%20HVAC%20installations%2C%20bright%20commercial%20space%20with%20sophisticated%20climate%20control&width=600&height=800&seq=proj003&orientation=portrait"
                alt="Shopping Mall"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Commercial Malls</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=Large%20industrial%20manufacturing%20plant%20facility%20with%20extensive%20HVAC%20systems%2C%20professional%20climate%20control%20equipment%2C%20industrial%20ductwork%2C%20ventilation%20systems%2C%20and%20advanced%20air%20conditioning%20infrastructure%20in%20modern%20factory%20setting&width=600&height=800&seq=proj004&orientation=portrait"
                alt="Industrial Plant"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Industrial Plants</h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/projects" 
              className="inline-block bg-[#06529e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#04437f] transition-colors whitespace-nowrap"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}