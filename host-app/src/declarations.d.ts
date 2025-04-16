import type { ComponentType } from 'react';
import type { SeriesCharacter } from 'shared-entities';

declare module 'arcaneMf/ArcaneCharacters' {
    export const ArcaneCharacters: ComponentType<{ characters: SeriesCharacter[] }>;
}
declare module 'tlouMf/TlouCharacters' {
    export const TlouCharacters: ComponentType<{ characters: SeriesCharacter[] }>;
}
