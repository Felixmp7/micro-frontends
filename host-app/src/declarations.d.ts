import type { ComponentType } from 'react';
import type { SeriesCharacter } from 'shared-entities';

declare module 'arcaneMf/CharactersList' {
    export const CharactersList: ComponentType<{
        buttonText: string;
        isLoading: boolean;
        characters: SeriesCharacter[]
        onClick: VoidFunction;
    }>;
}
declare module 'tlouMf/ListOfCharacters' {
    export const ListOfCharacters: ComponentType<{
        buttonText: string;
        isLoading: boolean;
        characters: SeriesCharacter[]
        onClick: VoidFunction;
    }>;
}
