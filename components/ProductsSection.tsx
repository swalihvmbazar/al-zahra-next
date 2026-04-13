import 'server-only';
import { getPayload } from 'payload';
import config from '@payload-config';
import ProductsSectionClient, { type ProductItem } from './ProductsSectionClient';

export default async function ProductsSection() {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: 'products',
    limit: 200,
    depth: 1,
    sort: 'order',
  });

  const products: ProductItem[] = docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    category: doc.category,
    description: doc.description,
    icon: doc.icon,
    image: doc.image as ProductItem['image'],
  }));

  return <ProductsSectionClient products={products} />;
}
