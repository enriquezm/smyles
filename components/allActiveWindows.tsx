import { useContext } from 'react';
import { Context, ActiveWindow } from './store';
import Window from './window';

const AllActiveWindows = () => {
  const [activeWindows] = useContext(Context);

  const windows: ActiveWindow[] = activeWindows.map((window) => {
    if (typeof window.content === 'string') {
      return <Window wide key={window.title} title={window.title}><span dangerouslySetInnerHTML={{ __html: window.content }} /></Window>
    }
    return <Window key={window.title} title={window.title}>{window.content}</Window>;
  });

  return (
    <>
      { windows }
    </>
  );
};

export default AllActiveWindows;