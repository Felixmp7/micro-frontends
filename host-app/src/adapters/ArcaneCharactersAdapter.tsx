import { ArcaneCharacters } from 'arcaneMf/ArcaneCharacters';
import type { SeriesCharacter } from 'shared-entities';

interface Props {
  characters: SeriesCharacter[];
}

export const ArcaneCharactersAdapter = ({ characters }: Props) => <ArcaneCharacters characters={characters} />;
