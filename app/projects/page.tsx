import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Downtown Corporate Tower',
      category: 'Commercial Office',
      location: 'New York, NY',
      year: '2023',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20corporate%20office%20building%20tower%20with%20sleek%20glass%20facade%20and%20contemporary%20architecture%20in%20downtown%20urban%20setting%20with%20professional%20HVAC%20climate%20control%20systems%20installed%20throughout%20multiple%20floors&width=600&height=400&seq=proj1&orientation=landscape',
      description: 'Complete HVAC system installation for 45-story office building with advanced climate control and energy management',
      systems: ['VRV Systems', 'Building Automation', 'Energy Recovery']
    },
    {
      title: 'Grand Plaza Shopping Mall',
      category: 'Retail Complex',
      location: 'Los Angeles, CA',
      year: '2023',
      image: 'https://readdy.ai/api/search-image?query=Large%20modern%20shopping%20mall%20interior%20with%20multiple%20levels%20bright%20lighting%20spacious%20atriums%20retail%20stores%20and%20advanced%20HVAC%20air%20conditioning%20systems%20providing%20comfortable%20climate%20control%20for%20shoppers%20in%20contemporary%20commercial%20space&width=600&height=400&seq=proj2&orientation=landscape',
      description: 'Multi-zone HVAC solution for 500,000 sq ft retail space with individual store climate control',
      systems: ['Rooftop Units', 'Zone Control', 'Air Quality Management']
    },
    {
      title: 'Metropolitan Hospital Expansion',
      category: 'Healthcare Facility',
      location: 'Chicago, IL',
      year: '2022',
      image: 'https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20exterior%20with%20clean%20white%20architecture%20medical%20facility%20design%20emergency%20entrance%20and%20state-of-the-art%20HVAC%20climate%20control%20systems%20ensuring%20sterile%20air%20quality%20and%20patient%20comfort%20in%20healthcare%20environment&width=600&height=400&seq=proj3&orientation=landscape',
      description: 'Critical environment HVAC systems for surgical suites and patient care areas with precision temperature control',
      systems: ['Medical Grade Filtration', 'Humidity Control', 'Redundant Systems']
    },
    {
      title: 'Riverside Luxury Apartments',
      category: 'Residential Complex',
      location: 'Miami, FL',
      year: '2023',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20high-rise%20apartment%20building%20with%20modern%20architecture%20balconies%20waterfront%20views%20and%20premium%20HVAC%20air%20conditioning%20systems%20providing%20individual%20climate%20control%20for%20each%20residential%20unit%20in%20upscale%20living%20environment&width=600&height=400&seq=proj4&orientation=landscape',
      description: 'Individual ductless systems for 200 luxury units with smart thermostat integration',
      systems: ['Ductless Mini-Splits', 'Smart Controls', 'Heat Pump Technology']
    },
    {
      title: 'Tech Campus Innovation Center',
      category: 'Technology Campus',
      location: 'San Francisco, CA',
      year: '2022',
      image: 'https://readdy.ai/api/search-image?query=Modern%20technology%20campus%20building%20with%20innovative%20architecture%20glass%20walls%20open%20spaces%20collaborative%20work%20areas%20and%20advanced%20HVAC%20climate%20control%20systems%20supporting%20sustainable%20energy-efficient%20operations%20in%20tech%20industry%20environment&width=600&height=400&seq=proj5&orientation=landscape',
      description: 'Sustainable HVAC design for LEED Platinum certified tech campus with geothermal integration',
      systems: ['Geothermal Heat Pumps', 'Solar Integration', 'Smart Building Controls']
    },
    {
      title: 'University Science Building',
      category: 'Educational Facility',
      location: 'Boston, MA',
      year: '2023',
      image: 'https://readdy.ai/api/search-image?query=Modern%20university%20science%20building%20with%20contemporary%20architecture%20research%20laboratories%20large%20windows%20and%20specialized%20HVAC%20systems%20providing%20precise%20climate%20control%20for%20scientific%20equipment%20and%20student%20learning%20spaces%20in%20academic%20environment&width=600&height=400&seq=proj6&orientation=landscape',
      description: 'Specialized HVAC for laboratories with fume hood exhaust and precise environmental control',
      systems: ['Laboratory Ventilation', 'Fume Hood Systems', 'Precision Controls']
    },
    {
      title: 'Grand Hotel & Resort',
      category: 'Hospitality',
      location: 'Las Vegas, NV',
      year: '2022',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20grand%20hotel%20resort%20building%20with%20elegant%20architecture%20multiple%20towers%20swimming%20pools%20landscaped%20grounds%20and%20comprehensive%20HVAC%20air%20conditioning%20systems%20providing%20guest%20comfort%20throughout%20rooms%20restaurants%20and%20entertainment%20venues&width=600&height=400&seq=proj7&orientation=landscape',
      description: '800-room hotel with centralized HVAC system and individual room controls for optimal guest comfort',
      systems: ['Central Chiller Plant', 'Guest Room Controls', 'Pool Dehumidification']
    },
    {
      title: 'Industrial Manufacturing Plant',
      category: 'Industrial Facility',
      location: 'Detroit, MI',
      year: '2023',
      image: 'https://readdy.ai/api/search-image?query=Large%20industrial%20manufacturing%20plant%20facility%20with%20steel%20structure%20high%20ceilings%20production%20floor%20machinery%20and%20heavy-duty%20HVAC%20ventilation%20systems%20providing%20climate%20control%20and%20air%20quality%20management%20for%20industrial%20operations&width=600&height=400&seq=proj8&orientation=landscape',
      description: 'Heavy-duty HVAC and ventilation for 300,000 sq ft manufacturing facility with process cooling',
      systems: ['Industrial Ventilation', 'Process Cooling', 'Heat Recovery']
    },
    {
      title: 'Airport Terminal Modernization',
      category: 'Transportation Hub',
      location: 'Dallas, TX',
      year: '2022',
      image: 'https://readdy.ai/api/search-image?query=Modern%20airport%20terminal%20interior%20with%20spacious%20design%20high%20ceilings%20large%20windows%20departure%20gates%20seating%20areas%20and%20advanced%20HVAC%20climate%20control%20systems%20managing%20air%20quality%20and%20comfort%20for%20thousands%20of%20travelers&width=600&height=400&seq=proj9&orientation=landscape',
      description: 'Large-scale HVAC upgrade for terminal serving 20 million passengers annually',
      systems: ['Large Capacity Chillers', 'Air Handling Units', 'Energy Management']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] bg-gradient-to-r from-[#06529e] to-[#04437f] flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-white/90 max-w-2xl">Delivering excellence across diverse industries and applications</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful HVAC installations across commercial, residential, and industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#06529e] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#c59241] font-semibold mb-2">
                    <i className="ri-building-line mr-2"></i>
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="ri-map-pin-line mr-2"></i>
                    {project.location}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Systems Installed:</p>
                    {project.systems.map((system, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <i className="ri-check-line text-[#06529e] mr-2"></i>
                        {system}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-[#06529e] mb-4">500+</div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Projects Completed</p>
              <p className="text-gray-600">Across multiple industries</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-[#c59241] mb-4">98%</div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Client Satisfaction</p>
              <p className="text-gray-600">Based on project reviews</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-[#06529e] mb-4">50M+</div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Square Feet</p>
              <p className="text-gray-600">Of space conditioned</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-[#c59241] mb-4">30+</div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Years Experience</p>
              <p className="text-gray-600">In HVAC industry</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#06529e] to-[#04437f] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Start Your Project Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's discuss how we can bring the same level of excellence to your HVAC project</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#06529e] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}