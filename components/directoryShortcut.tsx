import Shortcut from './shortcut';
import FolderIcon from './icons/folderIcon';

type Props = {
  title: string;
  content: string;
  isDisabled?: boolean;
  folderColor?: string;
};

const DirectoryShortcut = (props: Props) => {
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