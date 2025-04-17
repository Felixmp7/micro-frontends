import { SeriesCharacter } from 'shared-entities';
import { Button, Container, Item } from './Styled';

interface Props {
  language: 'en' | 'es';
  buttonText: string;
  isLoading: boolean;
  characters: SeriesCharacter[];
  onClick: VoidFunction;
}

export const CharactersList = ({
  language,
  buttonText = 'Load Arcane Characters',
  onClick,
  characters = [],
  isLoading
}: Props) => {

  if (characters.length && !isLoading) {
    return (
      <Container className="arcane-characters__container">
        {characters.map(({ name, description, image }) => (
          <Item className="arcane-characters__item" key={name}>
            <img src={image} alt={name} />
            <span>{name}</span>
            <p>{description[language]}</p>
          </Item>
        ))}
      </Container>
    )
  }

  return (
    <>
      <Button onClick={onClick} className='arcane-characters__button'>{buttonText}</Button>
      {isLoading && <p>Loading...</p>}
    </>
  )
}
