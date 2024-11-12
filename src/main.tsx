import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { getAuthToken } from "./api/auth.ts";

let storedToken = "";
axios.interceptors.request.use(async (config) => {
  if (config.url?.includes("token")) {
    return config;
  }

  if (!storedToken) {
    const { token } = await getAuthToken();
    storedToken = token;
  }
  config.headers.Authorization = `Bearer ${storedToken}`;
  return config;
});

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
