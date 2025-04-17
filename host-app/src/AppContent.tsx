import { ArcaneCharactersAdapter } from 'adapters/ArcaneCharactersAdapter';
import { TlouCharactersAdapter } from 'adapters/TlouCharactersAdapter';
import { Container, Header } from 'App.styles';
import { useCharacters } from 'hooks/useCharacters';
import { useLanguage } from 'hooks/useLanguage';
import { texts } from 'i18n/texts';
import ARCANE_JSON from 'mocks/ARCANE.json';
import TLOU_JSON from 'mocks/TLOU.json';
import { getCharacters } from 'services/characters.service';

export const AppContent = () => {
  const { language, setLanguage } = useLanguage();
  const t = texts[language];

  const {
    characters: arcaneCharacters,
    isLoading: arcaneIsLoading,
    handleLoadCharacters: handleLoadArcaneCharacters
  } = useCharacters(() => getCharacters(ARCANE_JSON))

  const {
    characters: tlouCharacters,
    isLoading: tlouIsLoading,
    handleLoadCharacters: handleLoadTlouCharacters
  } = useCharacters(() => getCharacters(TLOU_JSON))

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