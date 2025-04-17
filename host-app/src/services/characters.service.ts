import type { SeriesCharacter } from 'shared-entities';

export const getCharacters = (charactersData: SeriesCharacter[]) => {
    return new Promise<SeriesCharacter[]>((resolve) => {
        setTimeout(() => {
            resolve(charactersData);
        }, 2_000);
    });
}