import Shortcut from './shortcut';
import FolderIcon from './icons/folderIcon';

type Props = {
  heading: string;
  content: string;
  isDisabled?: boolean;
  folderColor?: string;
};

const DirectoryShortcut = ({ heading, content, isDisabled }: Props) => {
  return (
    <Shortcut
      heading={heading}
      content={content}
      isDisabled={isDisabled}
    >
      <FolderIcon
        isDisabled={isDisabled}
      />
    </Shortcut>
  );
};

export default DirectoryShortcut;