import { useRouter } from 'next/router';
import { Button } from 'antd';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-black py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Host App</h1>
        <div className="flex space-x-4">
          <Button 
            type={router.pathname === '/products' ? 'primary' : 'default'} 
            className="mr-2 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500" 
            onClick={() => router.push('/products')}
          >
            View Products
          </Button>
          <Button 
            type={router.pathname === '/basket' ? 'primary' : 'default'} 
            className="transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-gray-500" 
            onClick={() => router.push('/basket')}
          >
            View Basket
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800 ">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-sm text-gray-400 py-4 px-6">
        © {new Date().getFullYear()} Host App
      </footer>
    </div>
  );
}
