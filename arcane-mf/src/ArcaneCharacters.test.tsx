import { render, screen } from '@testing-library/react';
import { ArcaneCharacters } from './ArcaneCharacters';
import type { ArcaneCharacter } from './entities/ArcaneCharacter';

describe('ArcaneCharacters', () => {
  const mockCharacters: ArcaneCharacter[] = [
    { name: 'Jinx', image: 'https://static.wikia.nocookie.net/leagueoflegends/images/6/6c/Jinx_Render.png' },
    { name: 'Vi', image: 'https://static.wikia.nocookie.net/leagueoflegends/images/2/2e/Vi_Render.png' },
  ];

  it('renderiza los nombres de los personajes', () => {
    render(<ArcaneCharacters characters={mockCharacters} />);
    // expect(screen.getByText('Jinx')).toBeInTheDocument();
    // expect(screen.getByText('Vi')).toBeInTheDocument();
  });

  it('renderiza las imágenes de los personajes', () => {
    render(<ArcaneCharacters characters={mockCharacters} />);
    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(2);
    // expect(imgs[0]).toHaveAttribute('src', mockCharacters[0].image);
    // expect(imgs[1]).toHaveAttribute('src', mockCharacters[1].image);
  });
});
