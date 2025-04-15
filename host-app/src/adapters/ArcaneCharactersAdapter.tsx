import ArcaneCharacters from 'arcaneMf/ArcaneCharacters';
import { ArcaneCharacter } from '../entities/ArcaneCharacter';

interface Props {
  characters: ArcaneCharacter[];
}

export const ArcaneCharactersAdapter = ({ characters }: Props) => <ArcaneCharacters characters={characters} />;
