import { TlouCharactersAdapter } from 'adapters/TlouCharactersAdapter';
import { useCharacters } from 'hooks/useCharacters';
import { ArcaneCharactersAdapter } from './adapters/ArcaneCharactersAdapter';
import { Container, Header } from './App.styles';
import { useLanguage } from './hooks/useLanguage';
import { texts } from './i18n/texts';
import ARCANE_JSON from './mocks/ARCANE.json';
import TLOU_JSON from './mocks/TLOU.json';

export const AppContent = () => {
  const { language, setLanguage } = useLanguage();
  const { characters: arcaneCharacters, isLoading: arcaneIsLoading, handleLoadCharacters: handleLoadArcaneCharacters } = useCharacters(ARCANE_JSON)
  const { characters: tlouCharacters, isLoading: tlouIsLoading, handleLoadCharacters: handleLoadTlouCharacters } = useCharacters(TLOU_JSON)
  const t = texts[language];

  return (
    <Container className="host-app__container">
      <Header className="host-app__header">
        <h1>{t.title}</h1>
        <div>
          <label>{t.language}: </label>
          <select value={language} onChange={e => setLanguage(e.target.value as 'en' | 'es')}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </Header>
      <main className="host-app__main">
        <ArcaneCharactersAdapter
          language={language}
          characters={arcaneCharacters}
          isLoading={arcaneIsLoading}
          handleLoadCharacters={handleLoadArcaneCharacters}
        />
        <TlouCharactersAdapter
          language={language}
          characters={tlouCharacters}
          isLoading={tlouIsLoading}
          handleLoadCharacters={handleLoadTlouCharacters}
        />
      </main>
    </Container>
  );
};