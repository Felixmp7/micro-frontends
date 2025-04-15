import { render, screen } from '@testing-library/react';
import { TlouCharacters } from './TlouCharacters';
import type { TlouCharacter } from './entities/TlouCharacter';

describe('TlouCharacters', () => {
  const mockCharacters: TlouCharacter[] = [
    { name: 'Joel', image: 'https://static.wikia.nocookie.net/thelastofus/images/0/09/Joel_TLOU_Part_I_Render.png' },
    { name: 'Ellie', image: 'https://static.wikia.nocookie.net/thelastofus/images/9/9a/Ellie_TLOU_Part_I_Render.png' },
  ];

  it('renderiza los nombres de los personajes', () => {
    render(<TlouCharacters characters={mockCharacters} />);
    expect(screen.getByText('Joel')).toBeTruthy();
    // expect(screen.getByText('Ellie')).toBeInTheDocument();
  });

  it('renderiza las imágenes de los personajes', () => {
    render(<TlouCharacters characters={mockCharacters} />);
    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(2);
    // expect(imgs[0]).toHaveAttribute('src', mockCharacters[0].image);
    // expect(imgs[1]).toHaveAttribute('src', mockCharacters[1].image);
  });
});
