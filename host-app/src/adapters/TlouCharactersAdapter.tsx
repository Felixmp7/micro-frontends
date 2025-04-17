import type { SeriesCharacter } from 'shared-entities';
import { ListOfCharacters } from 'tlouMf/ListOfCharacters';

interface Props {
  language: 'en' | 'es';
  characters: SeriesCharacter[];
  isLoading: boolean;
  handleLoadCharacters: VoidFunction;
}

export const TlouCharactersAdapter = ({ characters, isLoading, handleLoadCharacters, language }: Props) => <ListOfCharacters
    language={language}
    buttonText={language === 'en' ? 'Load TLOU Characters' : 'Cargar personajes de TLOU'}
    characters={characters}
    isLoading={isLoading}
    onClick={handleLoadCharacters}
/>
