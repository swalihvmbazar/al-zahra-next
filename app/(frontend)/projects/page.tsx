import 'server-only';
import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@payload-config';

export const dynamic = 'force-dynamic';

type ProjectImage = { url?: string | null; alt: string };
type SystemRow = { system: string; id?: string | null };

export default async function ProjectsPage() {
  const payload = await getPayload({ config });

  const { docs: projects } = await payload.find({
    collection: 'projects',
    limit: 100,
    depth: 1,
    sort: 'order',
  });

  const getUrl = (image: ProjectImage | number) =>
    typeof image === 'object' ? (image.url ?? '') : '';
  const getAlt = (image: ProjectImage | number, fallback: string) =>
    typeof image === 'object' ? (image.alt || fallback) : fallback;

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

          {projects.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No projects found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const img = project.image as ProjectImage | number;
                const systems = (project.systems ?? []) as SystemRow[];
                return (
                  <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={getUrl(img)}
                        alt={getAlt(img, project.title)}
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
                      {systems.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-900">Systems Installed:</p>
                          {systems.map((row, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <i className="ri-check-line text-[#06529e] mr-2"></i>
                              {row.system}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
