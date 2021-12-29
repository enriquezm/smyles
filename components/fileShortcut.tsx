import Shortcut from './shortcut';
import FileIcon from './icons/fileIcon';

type Props = {
  type?: string;
  heading: string;
  content: React.ReactNode;
};

const FileShortcut = ({ type, heading, content }: Props) => {
  return (
    <Shortcut
      type={type}
      heading={heading}
      content={content}
    >
      <FileIcon />
    </Shortcut>
  );
};

export default FileShortcut;