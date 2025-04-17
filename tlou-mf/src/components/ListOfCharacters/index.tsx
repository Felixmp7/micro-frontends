import { SeriesCharacter } from 'shared-entities';
import { Button, Container, Item } from './Styled';

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
      <Container className="tlou-characters__container">
        {characters.map(({ name, description, image }) => (
          <Item className="tlou-characters__item" key={name}>
            <div>
              <span>{name}</span>
              <p>{description[language]}</p>
            </div>
            <img src={image} alt={name} />
          </Item>
        ))}
      </Container>
    )
  }

  return (
    <>
      <Button onClick={onClick} className='tlou-characters__button'>{buttonText}</Button>
      {isLoading && <p>Loading...</p>}
    </>
  )
}
