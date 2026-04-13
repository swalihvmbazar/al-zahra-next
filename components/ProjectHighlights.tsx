import 'server-only';
import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@payload-config';

type ProjectImage = { url?: string | null; alt: string };

export default async function ProjectHighlights() {
  const payload = await getPayload({ config });

  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: { featured: { equals: true } },
    limit: 4,
    depth: 1,
    sort: 'order',
  });

  if (projects.length === 0) return null;

  const getUrl = (image: ProjectImage | number) =>
    typeof image === 'object' ? (image.url ?? '') : '';
  const getAlt = (image: ProjectImage | number, fallback: string) =>
    typeof image === 'object' ? (image.alt || fallback) : fallback;

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Highlights</h2>
          <p className="text-lg text-gray-600">Delivering excellence across major infrastructure projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.map((project) => {
            const img = project.image as ProjectImage | number;
            return (
              <div key={project.id} className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={getUrl(img)}
                  alt={getAlt(img, project.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-[#c59241] text-xs font-semibold uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
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
  );
}
