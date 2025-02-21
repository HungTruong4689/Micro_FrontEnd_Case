import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/products'); // Redirect to "/products"
  }, []);

  return (
    <Layout>
      <h2 className="text-3xl font-bold">Redirecting to Products...</h2>
    </Layout>
  );
}
