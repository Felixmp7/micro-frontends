import { SeriesCharacter } from 'shared-entities';

import { Button, Container, Item } from './ListOfCharacters.styled';

interface Props {
  language?: 'en' | 'es';
  buttonText?: string;
  isLoading?: boolean;
  onClick?: VoidFunction;
  characters: SeriesCharacter[];
}

export const ListOfCharacters = ({
  characters,
  language = 'en',
  buttonText = 'Load TLOU Characters',
  isLoading = false,
  onClick,
}: Props) => {

  if (characters.length && !isLoading) {
    return (
      <Container>
        {characters.map(({ name, description, image }) => (
          <Item key={name}>
            <div>
              <span aria-label='name'>{name}</span>
              <p aria-label='description'>{description[language]}</p>
            </div>
            <img src={image} alt={`${name}, TLOU Character`} />
          </Item>
        ))}
      </Container>
    )
  }

  return (
    <>
      <Button onClick={onClick}>{buttonText}</Button>
      {isLoading && <p aria-live="polite">Loading...</p>}
    </>
  )
}
