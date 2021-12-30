import { useContext } from 'react';
import { Context } from './globalState';
import InfoPopup from './popups/infoPopup';
import Window from './window';

const activeAppMediator = (apps) => {
  return apps.map((app) => {
    if (app.type === 'popup') {
      return <InfoPopup key={app.id} heading={app.heading} content={app.content} />
    } else {
      return  <Window key={app.id} heading={app.heading}>{app.content}</Window>
    }
  });
}

const AllActiveApps = () => {
  const [activeApps] = useContext(Context);
  const currentActiveApps = activeAppMediator(activeApps); 

  return (
    <>
      { currentActiveApps }
    </>
  );
};

export default AllActiveApps;