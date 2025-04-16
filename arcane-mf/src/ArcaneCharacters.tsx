import type { SeriesCharacter } from 'shared-entities';
import styled from 'styled-components';

// BEM: arcane-characters__container, arcane-characters__item, etc.
const Container = styled.div`
  &.arcane-characters__container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
  }
`;

const Item = styled.div`
  &.arcane-characters__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #222;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    width: 180px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
`;

interface ArcaneCharactersProps {
  characters: SeriesCharacter[];
}

export const ArcaneCharacters = ({ characters }: ArcaneCharactersProps) => (
  <Container className="arcane-characters__container">
    {characters.map((char) => (
      <Item className="arcane-characters__item" key={char.name}>
        <img src={char.image} alt={char.name} width={120} height={120} />
        <span>{char.name}</span>
      </Item>
    ))}
  </Container>
);
