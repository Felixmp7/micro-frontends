import { SeriesCharacter } from 'shared-entities';

import { Button, Container, Item } from './CharactersList.styled';

interface Props {
  characters: SeriesCharacter[];
  language?: 'en' | 'es';
  buttonText?: string;
  isLoading?: boolean;
  onClick?: VoidFunction;
}

export const CharactersList = ({
  language = 'en',
  buttonText = 'Load Arcane Characters',
  isLoading = false,
  characters,
  onClick,
}: Props) => {

  if (characters.length && !isLoading) {
    return (
      <Container>
        {characters.map(({ name, description, image }) => (
          <Item key={name}>
            <img src={image} alt={name} />
            <span aria-label='name'>{name}</span>
            <p>{description[language]}</p>
          </Item>
        ))}
      </Container>
    )
  }

  return (
    <>
      <Button onClick={onClick}>{buttonText}</Button>
      {isLoading && <p>Loading...</p>}
    </>
  )
}
