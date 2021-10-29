import OutclickShortcut from './outclickShortcut';
import { GitHub } from 'react-feather';
import { color } from '../theme';

const GithubOutclickShortcut = (props) => {
  return (
    <OutclickShortcut title={props.title}>
      <GitHub color={color.purple} />
    </OutclickShortcut>
  );
};

export default GithubOutclickShortcut;