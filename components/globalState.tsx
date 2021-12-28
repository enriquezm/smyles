import React, { createContext, useState } from 'react';

export type ActiveApp = React.ReactNode; 

export const Context = createContext(undefined);

type Props = {
  children: React.ReactNode;
};

const INITIAL_ACTIVE_APPS = [
  {
    id: '123',
    type: 'welcomeInfoPopup',
    heading: 'welcome.info',
  },
];

// mock data for windows or popups
/*
 {
   id: 123,
   componentType: 'popup',
   heading: 'welcome.info',
   content: '<p>blah blah</p><p>blah blah</p>
 },
 {
   id: 456,
   componentType: 'window',
   heading: 'posts',
   content: <shortcut /><shortcut/>
 }
*/

const GlobalState = ({ children }: Props) => {
  const [activeApps, setActiveApps] = useState(INITIAL_ACTIVE_APPS)

  return (
    <Context.Provider value={[activeApps, setActiveApps]}>
      {children}
    </Context.Provider>
  );
};

export default GlobalState;