import { useEffect, useState } from 'react';
import ArcaneCharactersAdapter from './adapters/ArcaneCharactersAdapter';
import TlouCharactersAdapter from './adapters/TlouCharactersAdapter';
import { Container, Header, Selector } from './App.styles';
import { ArcaneCharacter } from './entities/ArcaneCharacter';
import { TlouCharacter } from './entities/TlouCharacter';
import { useLanguage } from './hooks/useLanguage';
import { texts } from './i18n/texts';
import { getArcaneCharacters } from './usecases/getArcaneCharacters';
import { getTlouCharacters } from './usecases/getTlouCharacters';

export const AppContent = () => {
  const { language, setLanguage } = useLanguage();
  const [series, setSeries] = useState<'arcane' | 'tlou' | null>(null);
  const [arcaneCharacters, setArcaneCharacters] = useState<ArcaneCharacter[]>([]);
  const [tlouCharacters, setTlouCharacters] = useState<TlouCharacter[]>([]);
  const t = texts[language];

  useEffect(() => {
    // Fetch data solo si es necesario
    if (series === 'arcane' && arcaneCharacters.length === 0) {
      getArcaneCharacters().then(setArcaneCharacters);
    }
    if (series === 'tlou' && tlouCharacters.length === 0) {
      getTlouCharacters().then(setTlouCharacters);
    }
  }, [arcaneCharacters.length, series, tlouCharacters.length]);

  return (
    <Container className="host-app__container">
      <Header className="host-app__header">
        <h1>Microfrontends Characters App</h1>
        <div>
          <label>{t.language}: </label>
          <select value={language} onChange={e => setLanguage(e.target.value as 'en' | 'es')}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </Header>
      <main>
        {!series && (
          <Selector className="host-app__selector">
            <h2>{t.selectSeries}</h2>
            <button onClick={() => setSeries('arcane')}>{t.arcane}</button>
            <button onClick={() => setSeries('tlou')}>{t.tlou}</button>
          </Selector>
        )}
        {series === 'arcane' && (
          <section>
            <button onClick={() => setSeries(null)}>&larr; {t.selectSeries}</button>
            <ArcaneCharactersAdapter characters={arcaneCharacters} />
          </section>
        )}
        {series === 'tlou' && (
          <section>
            <button onClick={() => setSeries(null)}>&larr; {t.selectSeries}</button>
            <TlouCharactersAdapter characters={tlouCharacters} />
          </section>
        )}
      </main>
    </Container>
  );
};