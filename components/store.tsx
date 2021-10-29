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

const initialActiveWindows = {
  about: false
};


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