import type { SeriesCharacter } from 'shared-entities';
import styled from 'styled-components';

// BEM: tlou-characters__container, tlou-characters__item, etc.
const Container = styled.div`
  &.tlou-characters__container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
  }
`;

const Item = styled.div`
  &.tlou-characters__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3b2f2f;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    width: 180px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
`;

interface TlouCharactersProps {
  characters: SeriesCharacter[];
}

export const TlouCharacters = ({ characters }: TlouCharactersProps) => (
  <Container className="tlou-characters__container">
    {characters.map((char) => (
      <Item className="tlou-characters__item" key={char.name}>
        <img src={char.image} alt={char.name} width={120} height={120} />
        <span>{char.name}</span>
      </Item>
    ))}
  </Container>
);
