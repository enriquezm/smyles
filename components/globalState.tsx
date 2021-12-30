import React, { createContext, useState } from 'react';

export type ActiveApp = React.ReactNode; 

export const Context = createContext(undefined);

type Props = {
  children: React.ReactNode;
};

const INITIAL_ACTIVE_APPS = [
  {
    id: '123',
    type: 'popup',
    heading: 'welcome.info',
    content: "<p>Hihi! Welcome to thatguythatcodes.com</p><p>Wondering wtf this site is about? It's my place on the web to dump my thoughts/ideas/experiments.</p><p>On the left you'll find some shortcuts to my content. Have fun and take a look around.</p><p>Who knows, maybe you'll find some easter eggs around here...</p>",
  },
];

const GlobalState = ({ children }: Props) => {
  const [activeApps, setActiveApps] = useState(INITIAL_ACTIVE_APPS)

  return (
    <Context.Provider value={[activeApps, setActiveApps]}>
      {children}
    </Context.Provider>
  );
};

export default GlobalState;