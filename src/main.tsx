import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import "./index.css";

import { Toaster } from "sonner";
import { ToastProvider } from "./context/ToastProvider.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <App />
          <Toaster
              richColors
              position="top-right"
          />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)


