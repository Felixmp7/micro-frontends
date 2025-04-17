import { useState } from 'react';
import type { SeriesCharacter } from 'shared-entities';

export const useCharacters = (fetcher: () => Promise<SeriesCharacter[]>) => {
    const [characters, setCharacters] = useState<SeriesCharacter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadCharacters = async () => {
        setIsLoading(true);
        try {
            const characters = await fetcher();
            setCharacters(characters);
        } catch (error) {
            console.error('Error fetching characters:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return { characters, isLoading, handleLoadCharacters };
}
