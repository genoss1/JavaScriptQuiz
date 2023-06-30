import { Dispatch, SetStateAction, createContext } from 'react';

interface PlayerContextType {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

export const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);
