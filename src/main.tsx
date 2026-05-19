import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./index.css";

import { Toaster } from "sonner";
import { ToastProvider } from "./context/ToastProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <App />
      <Toaster
          richColors
          position="top-right"
      />
    </ToastProvider>
  </StrictMode>,
)


