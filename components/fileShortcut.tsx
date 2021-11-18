import Shortcut from './shortcut';
import FileIcon from './icons/fileIcon';

type Props = {
  title: string;
  content: React.ReactNode;
  colorOverride?: string;
};

const FileShortcut = (props: Props) => {
  return (
    <Shortcut
      title={props.title}
      content={props.content}
      colorOverride={props.colorOverride}
    >
      <FileIcon />
    </Shortcut>
  );
};

export default FileShortcut;