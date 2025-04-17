import { useState } from 'react';
import type { SeriesCharacter } from 'shared-entities';

export const useCharacters = (jsonMock: SeriesCharacter[]) => {
    const [characters, setCharacters] = useState<SeriesCharacter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadCharacters = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setCharacters(jsonMock);
            setIsLoading(false);
        }, 2000);
    }

    return { characters, isLoading, handleLoadCharacters };
}
