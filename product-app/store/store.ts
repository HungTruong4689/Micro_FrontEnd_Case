import { store } from "host/store"; // Ensure this matches your Webpack exposure

console.log("✅ Imported Store in Product App:", store);

// if (!store) {
//   throw new Error("❌ Redux store is undefined in Product App!");
// }

export default store;

// import dynamic from "next/dynamic";

// const store = dynamic(() => import("host/store"), {
//   ssr: false, // Ensure it only runs on the client-side
//   loading: () => {
//     console.log("⏳ Loading shared Redux store...");
//     return null;
//   },
// });

// export default store;

