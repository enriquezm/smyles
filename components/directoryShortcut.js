import Shortcut from './shortcut';
import FolderIcon from './folderIcon';

const DirectoryShortcut = (props) => {
  return (
    <Shortcut
      title={props.title}
      content={props.content}
    >
      <FolderIcon />
    </Shortcut>
  );
};

export default DirectoryShortcut;