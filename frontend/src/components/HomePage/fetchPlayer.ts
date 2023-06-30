import { Player } from '../../types/Player';

export const fetchPlayers = async () => {
  const question = await fetch('http://localhost:8080/player');
  const questionData = await question.json();

  return questionData as Player[];
};
