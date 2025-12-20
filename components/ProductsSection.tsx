'use client';

import Link from 'next/link';

export default function ProductsSection() {
  const products = [
    {
      title: 'Insulation Solutions',
      description: 'High-performance thermal insulation materials for optimal energy efficiency',
      image: 'https://readdy.ai/api/search-image?query=professional%20hvac%20thermal%20insulation%20foam%20material%20rolls%20and%20sheets%20for%20air%20conditioning%20ducts%20with%20silver%20reflective%20surface%20clean%20industrial%20product%20photography%20on%20simple%20white%20background&width=400&height=460&seq=prod001&orientation=portrait'
    },
    {
      title: 'Aluminium Jacketing & Connectors',
      description: 'Durable aluminium cladding and precision-engineered connectors',
      image: 'https://readdy.ai/api/search-image?query=aluminum%20metal%20jacketing%20sheets%20and%20hvac%20duct%20connectors%20industrial%20grade%20silver%20metallic%20components%20for%20air%20conditioning%20systems%20clean%20product%20shot%20on%20white%20background&width=400&height=460&seq=prod002&orientation=portrait'
    },
    {
      title: 'Vibration Control',
      description: 'Advanced vibration isolation systems for HVAC equipment',
      image: 'https://readdy.ai/api/search-image?query=hvac%20vibration%20isolator%20rubber%20mounts%20and%20spring%20dampeners%20for%20air%20conditioning%20equipment%20black%20industrial%20components%20on%20clean%20white%20background%20product%20photography&width=400&height=460&seq=prod003&orientation=portrait'
    },
    {
      title: 'Duct Accessories',
      description: 'Complete range of ductwork fittings and accessories',
      image: 'https://readdy.ai/api/search-image?query=hvac%20duct%20accessories%20metal%20fittings%20dampers%20grilles%20and%20registers%20silver%20galvanized%20steel%20components%20for%20ventilation%20systems%20on%20white%20background&width=400&height=460&seq=prod004&orientation=portrait'
    },
    {
      title: 'A/C Parts',
      description: 'Genuine air conditioning spare parts and components',
      image: 'https://readdy.ai/api/search-image?query=air%20conditioner%20spare%20parts%20compressor%20fan%20motor%20and%20electronic%20components%20hvac%20replacement%20parts%20arranged%20neatly%20on%20clean%20white%20background&width=400&height=460&seq=prod005&orientation=portrait'
    },
    {
      title: 'Copper Pipes & Fittings',
      description: 'Premium copper tubing and refrigeration fittings',
      image: 'https://readdy.ai/api/search-image?query=copper%20pipes%20tubes%20and%20brass%20fittings%20for%20refrigeration%20systems%20shiny%20metallic%20hvac%20plumbing%20components%20coiled%20and%20straight%20pipes%20on%20white%20background&width=400&height=460&seq=prod006&orientation=portrait'
    },
    {
      title: 'Freon Gas',
      description: 'Certified refrigerant gases for all AC systems',
      image: 'https://readdy.ai/api/search-image?query=refrigerant%20gas%20cylinders%20freon%20bottles%20for%20air%20conditioning%20colorful%20metal%20tanks%20with%20safety%20labels%20hvac%20cooling%20gas%20on%20white%20background&width=400&height=460&seq=prod007&orientation=portrait'
    },
    {
      title: 'Sealants & Adhesives',
      description: 'Industrial-grade sealants and bonding solutions',
      image: 'https://readdy.ai/api/search-image?query=hvac%20sealant%20tubes%20and%20adhesive%20cartridges%20industrial%20construction%20chemicals%20for%20ductwork%20silver%20and%20white%20tubes%20on%20clean%20background&width=400&height=460&seq=prod008&orientation=portrait'
    },
    {
      title: 'Duct Tape & Coatings',
      description: 'Heavy-duty tapes and protective coatings',
      image: 'https://readdy.ai/api/search-image?query=aluminum%20foil%20duct%20tape%20rolls%20and%20hvac%20coating%20products%20silver%20metallic%20tape%20and%20sealant%20containers%20for%20air%20conditioning%20on%20white%20background&width=400&height=460&seq=prod009&orientation=portrait'
    },
    {
      title: 'Flexible Ducts',
      description: 'Flexible ducting solutions for versatile installations',
      image: 'https://readdy.ai/api/search-image?query=flexible%20hvac%20duct%20hose%20silver%20insulated%20air%20conditioning%20ducting%20coiled%20flexible%20ventilation%20tube%20with%20metallic%20finish%20on%20white%20background&width=400&height=460&seq=prod010&orientation=portrait'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600">Comprehensive HVAC solutions for every project need</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#06529e] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-56 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                  {product.description}
                </p>
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-sm font-medium text-[#06529e] hover:text-[#c59241] transition-colors cursor-pointer"
                >
                  View Products
                  <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
