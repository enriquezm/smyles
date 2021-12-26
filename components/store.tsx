import React, { createContext, useState } from 'react';

export type ActiveWindow = {
  title: string;
  content?: React.ReactNode;
}

export const Context = createContext(undefined);

type Props = {
  children: React.ReactNode;
};

const Store = ({ children }: Props) => {
  const [activeWindows, setActiveWindows] = useState([]);

  return (
    <Context.Provider value={[activeWindows, setActiveWindows]}>
      {children}
    </Context.Provider>
  );
};

export default Store;