import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { App } from './App';

vi.mock('./adapters/ArcaneCharactersAdapter', () => ({
  default: () => <div>ArcaneCharactersAdapterMock</div>
}));
vi.mock('./adapters/TlouCharactersAdapter', () => ({
  default: () => <div>TlouCharactersAdapterMock</div>
}));

describe('App', () => {
  it('muestra el selector de series por defecto', () => {
    render(<App />);
    expect(screen.getByText(/Select a series|Selecciona una serie/i)).toBeTruthy();
  });

  it('permite cambiar de idioma', () => {
    render(<App />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'es' } });
    expect(screen.getByText(/Selecciona una serie/)).toBeTruthy();
  });

  it('muestra el microfrontend de Arcane al seleccionar la serie', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Arcane/i));
    expect(screen.getByText(/ArcaneCharactersAdapterMock/)).toBeTruthy();
  });

  it('muestra el microfrontend de TLOU al seleccionar la serie', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/The Last of Us/i));
    expect(screen.getByText(/TlouCharactersAdapterMock/)).toBeTruthy();
  });
});
