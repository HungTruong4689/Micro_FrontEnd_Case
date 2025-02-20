import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "antd/dist/reset.css"; // Ant Design styles

export default function App({ Component, pageProps }: AppProps) {
  if (!store) {
    console.error("Redux store is undefined!");
    return <p>Error: Redux store is not available.</p>;
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
