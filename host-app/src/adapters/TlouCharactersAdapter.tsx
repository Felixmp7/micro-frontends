import type { SeriesCharacter } from 'shared-entities';
import { TlouCharacters } from 'tlouMf/TlouCharacters';

interface Props {
  characters: SeriesCharacter[];
}

export const TlouCharactersAdapter = ({ characters }: Props) => <TlouCharacters characters={characters} />;
