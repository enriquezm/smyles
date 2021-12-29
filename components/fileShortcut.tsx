import Shortcut from './shortcut';
import FileIcon from './icons/fileIcon';

type Props = {
  heading: string;
  content: React.ReactNode;
  colorOverride?: string;
};

const FileShortcut = ({ heading, content }: Props) => {
  return (
    <Shortcut
      heading={heading}
      content={content}
    >
      <FileIcon />
    </Shortcut>
  );
};

export default FileShortcut;