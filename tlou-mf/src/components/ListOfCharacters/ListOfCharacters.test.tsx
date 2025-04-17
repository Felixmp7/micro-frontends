import { render, screen } from '@testing-library/react';
import { SeriesCharacter } from 'shared-entities';
import { ListOfCharacters } from './';

describe('ListOfCharacters tests', () => {
  const mockCharacters: SeriesCharacter[] = [
    {
      name: 'Joel',
      image: 'https://static.wikia.nocookie.net/thelastofus/images/0/09/Joel_TLOU_Part_I_Render.png',
      description: { en: '', es: '' },
    },
    {
      name: 'Ellie',
      image: 'https://static.wikia.nocookie.net/thelastofus/images/9/9a/Ellie_TLOU_Part_I_Render.png',
      description: { en: '', es: '' },
    },
  ];
  const mockCharactersLength = mockCharacters.length;

  it('Renders characters list', () => {
    render(
      <ListOfCharacters characters={mockCharacters} />,
    );
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(mockCharactersLength)

    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(mockCharactersLength);

    expect(imgs[0].getAttribute('src')).toBe(mockCharacters[0].image);
    expect(imgs[1].getAttribute('src')).toBe(mockCharacters[1].image);
  });

  it('Renders button to load characters', async () => {
    const { findByRole } = render(
      <ListOfCharacters characters={[]} />,
    );
    const button = await findByRole('button');
    expect(button).toBeVisible();
  });

  it('Renders loading message', async () => {
    const { findByText } = render(<ListOfCharacters isLoading characters={[]} />);
    const loading = await findByText('Loading...');
    expect(loading).toBeVisible();
  });
});
