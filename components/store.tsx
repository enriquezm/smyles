import { createContext, useState } from 'react';

const initialGlobalState = {
  site: {
    name: 'Myles Enriquez',
  },
  links: {
    github: 'https://github.com/enriquezm',
    linkedin: 'https://www.linkedin.com/in/mylesenriquez/'
  }
};

export interface ActiveWindow {
  title: string;
}

const initialActiveWindows: ActiveWindow[] = [
  {
    title: 'welcome.txt'
  }
];


export const Context = createContext(undefined);

const Store = ({ children }) => {
  const [activeWindows, setActiveWindows] = useState(initialActiveWindows);

  return (
    <Context.Provider value={[activeWindows, setActiveWindows]}>
      {children}
    </Context.Provider>
  );
};

export default Store;