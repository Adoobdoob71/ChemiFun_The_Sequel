import React from 'react';

export const PlayerIdContext = React.createContext({
  playerID: "",
  update_playerID: (ID: string) => {}
});