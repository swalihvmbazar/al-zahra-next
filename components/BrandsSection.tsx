import 'server-only';
import { getPayload } from 'payload';
import config from '@payload-config';
import BrandsSectionClient, { type BrandItem } from './BrandsSectionClient';

export default async function BrandsSection() {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: 'brands',
    limit: 100,
    depth: 1,
    sort: 'order',
  });

  const brands: BrandItem[] = docs.map((doc) => ({
    id: doc.id,
    name: doc.name,
    logo: doc.logo as BrandItem['logo'],
  }));

  return <BrandsSectionClient brands={brands} />;
}
