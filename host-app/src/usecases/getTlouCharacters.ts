import { TlouCharacter } from '../entities/TlouCharacter';

// Simulación de fetch. En producción, reemplazar por llamada real a API.
export const getTlouCharacters = async (): Promise<TlouCharacter[]> => [
  { name: 'Joel', image: 'https://static.wikia.nocookie.net/thelastofus/images/0/09/Joel_TLOU_Part_I_Render.png' },
  { name: 'Ellie', image: 'https://static.wikia.nocookie.net/thelastofus/images/9/9a/Ellie_TLOU_Part_I_Render.png' },
  { name: 'Abby', image: 'https://static.wikia.nocookie.net/thelastofus/images/7/7b/Abby_TLOU_Part_II_Render.png' },
];
