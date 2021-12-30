import OutclickShortcut from '../outclickShortcut';
import { GitHub } from 'react-feather';
import { color } from '../../theme';

type Props = {
  title: string;
  href: string;
};

const GithubOutclickShortcut = (props: Props) => {
  return (
    <OutclickShortcut href={props.href} title={props.title}>
      <GitHub color={color.purple} />
    </OutclickShortcut>
  );
};

export default GithubOutclickShortcut;