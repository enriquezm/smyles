import OutclickShortcut from './outclickShortcut';
import { Linkedin } from 'react-feather';
import { color } from '../theme';

const LinkedinOutclickShortcut = (props) => {
  return (
    <OutclickShortcut title={props.title}>
      <Linkedin color={color.blue} />
    </OutclickShortcut>
  );
};

export default LinkedinOutclickShortcut;