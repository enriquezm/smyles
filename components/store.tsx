import React, { createContext, useState } from 'react';

export type ActiveWindow = {
  title: string;
  content?: React.ReactNode;
}

const content = (
  <>
    <p>Hey! Welcome to thatguythatcodes.com</p>
    <p>Wondering wtf this site is about? It&apos;s my place on the web to dump my thoughts/ideas/experiments.</p>
    <p>On the left you&apos;ll find some shortcuts to my content. Have fun and take a look around.</p>
    <p>Who knows, maybe you&apos;ll find some easter eggs around here...</p>
  </>
);

const initialActiveWindows: ActiveWindow[] = [
  {
    title: 'welcome.txt',
    content
  }
];

export const Context = createContext(null);

type Props = {
  children: React.ReactNode;
};

const Store = ({ children }: Props) => {
  const [activeWindows, setActiveWindows] = useState(initialActiveWindows);

  return (
    // 'value' prop gets passed down to children components
    <Context.Provider value={{activeWindows, setActiveWindows}}>
      {children}
    </Context.Provider>
  );
};

export default Store;