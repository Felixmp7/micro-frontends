
import { LanguageProvider } from "context/LanguageProvider";
import './App.css';
import { AppContent } from "./AppContent";

export const App = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);
