import OutclickShortcut from '../outclickShortcut';
import { GitHub } from 'react-feather';
import { color } from '../../theme';

type Props = {
  title: string;
};

const GithubOutclickShortcut = (props: Props) => {
  return (
    <OutclickShortcut title={props.title}>
      <GitHub color={color.purple} />
    </OutclickShortcut>
  );
};

export default GithubOutclickShortcut;