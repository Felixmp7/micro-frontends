import type { SeriesCharacter } from 'shared-entities';

export const getCharacters = (jsonMock: SeriesCharacter[]) => {
    return new Promise<SeriesCharacter[]>((resolve) => {
        setTimeout(() => {
            resolve(jsonMock);
        }, 2_000);
    });
}