import './App.css';
import { AppContent } from "./AppContent";
import { LanguageProvider } from "./context/LanguageContext";

export const App = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);
