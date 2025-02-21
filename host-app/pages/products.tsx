import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ProductList = dynamic(() => import('productApp/ProductList'), { ssr: false });

export default function ProductsPage() {
  const router = useRouter();

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">Product List</h2>
      <ProductList key={router.asPath} /> {/* Forces React to remount the component */}
    </Layout>
  );
}
