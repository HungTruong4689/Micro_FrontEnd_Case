import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/reset.css"; // Ant Design styles
import withReduxStore from "../hocs/withReduxStore";

function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default withReduxStore(App);
