export interface Game {
  name?: string;
  gameStarted?: boolean;
  host?: string;
  participants?: Participant[];
  key: string;
  timeCreated: number;
}

export interface Participant {
  nickname?: string;
  points?: number;
  key?: string;
}