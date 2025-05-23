import { ArcaneCharactersAdapter } from 'adapters/ArcaneCharactersAdapter';
import { TlouCharactersAdapter } from 'adapters/TlouCharactersAdapter';
import { Container, Header, Section } from 'App.styles';
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
    <Container>
      <Header>
        <h1>{t.title}</h1>
        <div>
          <label>{t.language}: </label>
          <select value={language} onChange={({ target }) => setLanguage(target.value as 'en' | 'es')}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </Header>
      <Section>
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
      </Section>
    </Container>
  );
};