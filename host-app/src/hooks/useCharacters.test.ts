import { act, renderHook } from '@testing-library/react';
import type { SeriesCharacter } from 'shared-entities';
import { vi } from 'vitest';

import { getCharacters } from '../services/characters.service';
import { useCharacters } from './useCharacters';

describe('useCharacters', () => {
  const mockCharacters: SeriesCharacter[] = [
    { name: 'Vi', image: 'vi.png', description: { en: 'Enforcer', es: 'Agente' } },
    { name: 'Jinx', image: 'jinx.png', description: { en: 'Loose cannon', es: 'Descontrolada' } },
  ];

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should start with empty characters and not loading', () => {
    const { result } = renderHook(() => useCharacters(() => getCharacters(mockCharacters)));
    expect(result.current.characters).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it('should set loading when handleLoadCharacters is called', () => {
    const { result } = renderHook(() => useCharacters(() => getCharacters(mockCharacters)));
    act(() => {
      result.current.handleLoadCharacters();
    });
    expect(result.current.isLoading).toBe(true);
  });

  it('should load characters after timeout', async () => {
    const { result } = renderHook(() => useCharacters(() => getCharacters(mockCharacters)));
    await act(async () => {
      result.current.handleLoadCharacters();
      vi.runAllTimers();
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.characters).toEqual(mockCharacters);
  });
});
