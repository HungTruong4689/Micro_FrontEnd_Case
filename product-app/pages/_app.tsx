
import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import  {store}  from "host/store"; 

// console.log("✅ Final Check - Redux Store in _app.tsx:", store);

// export default function App({ Component, pageProps }: AppProps) {
  
//   return (
    
//       <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
   
//   );
// }


// product_app/pages/_app.tsx
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import type { Store } from 'redux';

function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState<Store | null>(null);
  //const [store, setStore] = useState<unknown>(null);

  // Dynamically import the store from the host_app
  useEffect(() => {
    import('host/store').then((mod) => {
      setStore(mod.store);
    });
  }, []);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// Wrap MyApp with dynamic(..., { ssr: false }) so it only renders on the client
export default dynamic(() => Promise.resolve(MyApp), { ssr: false });



