import { render } from '@testing-library/react';
import { SeriesCharacter } from 'shared-entities';
import { CharactersList } from './';

describe('CharactersList tests', () => {
  const mockCharacters: SeriesCharacter[] = [
    {
      name: 'Violet',
      image: 'violet-image.png',
      description: { en: 'Violet on English', es: 'Violet en Español' },
    },
    {
      name: 'Jinx',
      image: 'jinx-image.png',
      description: { en: 'Jinx on English', es: 'Jinx en Español' },
    },
    {
      name: 'Silco',
      image: 'silco-image.png',
      description: { en: 'Silco on English', es: 'Silco en Español' },
    },
  ];
  const mockCharactersLength = mockCharacters.length;

  it('Renders characters list', () => {
    const { getAllByLabelText, getAllByRole } = render(
      <CharactersList characters={mockCharacters} />,
    );
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(mockCharactersLength)

    const imgs = getAllByRole('img');
    expect(imgs).toHaveLength(mockCharactersLength);

    const names = getAllByLabelText('name')
    expect(names).toHaveLength(mockCharactersLength);

    const descriptions = getAllByRole('paragraph')
    expect(descriptions).toHaveLength(mockCharactersLength);

    expect(imgs[0].getAttribute('src')).toBe(mockCharacters[0].image);
    expect(imgs[1].getAttribute('src')).toBe(mockCharacters[1].image);
    expect(imgs[2].getAttribute('src')).toBe(mockCharacters[2].image);

    expect(names[0].textContent).toBe(mockCharacters[0].name);
    expect(names[1].textContent).toBe(mockCharacters[1].name);
    expect(names[2].textContent).toBe(mockCharacters[2].name);

    expect(descriptions[0].textContent).toBe(mockCharacters[0].description.en);
    expect(descriptions[1].textContent).toBe(mockCharacters[1].description.en);
    expect(descriptions[2].textContent).toBe(mockCharacters[2].description.en);
  });

  it('Renders button to load characters', async () => {
    const { findByRole } = render(
      <CharactersList characters={[]} />,
    );
    const button = await findByRole('button');
    expect(button).toBeVisible();
  });

  it('Renders loading message', async () => {
    const { findByText } = render(<CharactersList isLoading characters={[]} />);
    const loading = await findByText('Loading...');
    expect(loading).toBeVisible();
  });

  it('Render descriptions in Spanish', () => {
    const { getAllByRole } = render(
      <CharactersList characters={mockCharacters} language="es" />,
    );
    const descriptions = getAllByRole('paragraph')
    expect(descriptions).toHaveLength(mockCharactersLength);

    expect(descriptions[0].textContent).toBe(mockCharacters[0].description.es);
    expect(descriptions[1].textContent).toBe(mockCharacters[1].description.es);
    expect(descriptions[2].textContent).toBe(mockCharacters[2].description.es);
  });
});
