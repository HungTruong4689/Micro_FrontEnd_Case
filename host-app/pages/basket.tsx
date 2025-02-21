import dynamic from 'next/dynamic';
import Layout from '../components/Layout';

const Basket = dynamic(() => import('basketApp/Basket'), { ssr: false });

export default function BasketPage() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">Your Basket</h2>
      <Basket />
    </Layout>
  );
}
