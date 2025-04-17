import { CharactersList } from 'arcaneMf/CharactersList';
import type { SeriesCharacter } from 'shared-entities';

interface Props {
  language: 'en' | 'es';
  characters: SeriesCharacter[];
  isLoading: boolean;
  handleLoadCharacters: VoidFunction;
}

export const ArcaneCharactersAdapter = ({ characters, isLoading, handleLoadCharacters, language }: Props) => <CharactersList
    language={language}
    buttonText={language === 'en' ? 'Load Arcane Characters' : 'Cargar personajes de Arcane'}
    characters={characters}
    isLoading={isLoading}
    onClick={handleLoadCharacters}
/>