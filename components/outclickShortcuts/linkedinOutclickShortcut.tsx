import OutclickShortcut from '../outclickShortcut';
import { Linkedin } from 'react-feather';
import { color } from '../../theme';

type Props = {
  title: string;
};

const LinkedinOutclickShortcut = (props: Props) => {
  return (
    <OutclickShortcut title={props.title}>
      <Linkedin color={color.blue} />
    </OutclickShortcut>
  );
};

export default LinkedinOutclickShortcut;