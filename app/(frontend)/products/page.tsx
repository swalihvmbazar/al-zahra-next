
import ProductsSection from '@/components/ProductsSection';
import Link from 'next/link';

export default function ProductsPage() {



  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] bg-gradient-to-r from-[#06529e] to-[#04437f] flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl">Comprehensive HVAC solutions for every application</p>
        </div>
      </section>

      <ProductsSection />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#06529e] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-flashlight-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Efficient</h3>
              <p className="text-gray-600">Advanced technology that reduces energy consumption and operational costs</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#c59241] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-settings-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Installation</h3>
              <p className="text-gray-600">Designed for quick and hassle-free installation by certified technicians</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#06529e] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Performance</h3>
              <p className="text-gray-600">Built to last with premium materials and rigorous quality control</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#c59241] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-sound-module-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quiet Operation</h3>
              <p className="text-gray-600">Engineered for minimal noise levels in residential and commercial spaces</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#06529e] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Controls</h3>
              <p className="text-gray-600">Integrated with modern control systems for optimal comfort management</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-[#c59241] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-recycle-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">Environmentally responsible refrigerants and sustainable manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#06529e] to-[#04437f] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Help Choosing?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Our experts are ready to help you find the perfect HVAC solution for your specific needs</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#06529e] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}