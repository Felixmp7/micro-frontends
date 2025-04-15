import { ArcaneCharacter } from '../entities/ArcaneCharacter';

// Simulación de fetch. En producción, reemplazar por llamada real a API.
export const getArcaneCharacters = async (): Promise<ArcaneCharacter[]> => [
  { name: 'Jinx', image: 'https://static.wikia.nocookie.net/leagueoflegends/images/6/6c/Jinx_Render.png' },
  { name: 'Vi', image: 'https://static.wikia.nocookie.net/leagueoflegends/images/2/2e/Vi_Render.png' },
  { name: 'Caitlyn', image: 'https://static.wikia.nocookie.net/leagueoflegends/images/3/3b/Caitlyn_Render.png' },
];
