import Shortcut from './shortcut';
import FolderIcon from './folderIcon';

const DirectoryShortcut = (props) => {
  return (
    <Shortcut
      title={props.title}
    >
      <FolderIcon />
    </Shortcut>
  );
};

export default DirectoryShortcut;