import { useContext } from 'react';
import { Context } from './globalState';
import InfoPopup from './popups/infoPopup';
import WelcomeInfoPopup from './popups/welcomeInfoPopup';
import Window from './window';

const activeAppService = (apps) => {
  return apps.map((app) => {
    if (app.type === 'welcomeInfoPopup') {
      return <WelcomeInfoPopup key={app.id} />
    } else if (app.type === 'popup') {
      return <InfoPopup key={app.id} heading={app.heading}>{app.content}</InfoPopup>
    } else {
      return  <Window key={app.id} heading={app.heading}>{app.content}</Window>
    }
  });
}

const AllActiveApps = () => {
  const [activeApps] = useContext(Context);
  const currentActiveApps = activeAppService(activeApps); 

  return (
    <>
      { currentActiveApps }
    </>
  );
};

export default AllActiveApps;