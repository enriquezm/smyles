import OutclickShortcut from '../outclickShortcut';
import { Linkedin } from 'react-feather';
import { color } from '../../theme';

type Props = {
  title: string;
  href: string;
};

const LinkedinOutclickShortcut = (props: Props) => {
  return (
    <OutclickShortcut href={props.href} title={props.title}>
      <Linkedin color={color.blue} />
    </OutclickShortcut>
  );
};

export default LinkedinOutclickShortcut;