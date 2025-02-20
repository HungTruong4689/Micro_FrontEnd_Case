import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function RootComponent() {
  const [store, setStore] = useState(null);

  // Dynamically import the store from host_app
  useEffect(() => {
    import("host/store").then((mod) => {
      console.log("✅ Imported Redux Store in Basket App:", mod.store);
      setStore(mod.store);
    }).catch((error) => {
      console.error("❌ Error loading Redux store:", error);
    });
  }, []);

  if (!store) {
    return <div>Loading Redux Store...</div>;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// Initialize React Root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app
reportWebVitals();
