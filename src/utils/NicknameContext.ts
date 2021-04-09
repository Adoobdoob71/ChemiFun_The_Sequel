import React from 'react';

export const NicknameContext = React.createContext({
  nickname: "",
  change_nickname: (value: string) => {}
})

