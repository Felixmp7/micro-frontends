import type { ComponentType } from 'react';
import type { SeriesCharacter } from 'shared-entities';

declare module 'arcaneMf/ArcaneCharacters' {
    export const ArcaneCharacters: ComponentType<SeriesCharacter[]>;
}
declare module 'tlouMf/TlouCharacters' {
    export const TlouCharacters: ComponentType<SeriesCharacter[]>;
}