import Shortcut from './shortcut';
import FileIcon from './fileIcon';

const FileShortcut = (props) => {
  return (
    <Shortcut
      title={props.title}
      content={props.content}
    >
      <FileIcon />
    </Shortcut>
  );
};

export default FileShortcut;