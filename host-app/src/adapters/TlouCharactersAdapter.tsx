import TlouCharacters from 'tlouMf/TlouCharacters';
import { TlouCharacter } from '../entities/TlouCharacter';

interface Props {
  characters: TlouCharacter[];
}

export const TlouCharactersAdapter = ({ characters }: Props) => <TlouCharacters characters={characters} />;
