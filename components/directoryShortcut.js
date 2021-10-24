import Shortcut from './shortcut';
import FolderIcon from './folderIcon';

const DirectoryShortcut = (props) => {
  return (
    <Shortcut
      title={props.title}
      content={props.content}
      isDisabled={props.isDisabled}
    >
      <FolderIcon
        folderColor={props.folderColor}
        isDisabled={props.isDisabled}
      />
    </Shortcut>
  );
};

export default DirectoryShortcut;