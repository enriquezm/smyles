import Shortcut from './shortcut';
import FileIcon from './fileIcon';

const FileShortcut = (props) => {
  return (
    <Shortcut
      id={props.id}
      title={props.title}
      content={props.content}
      colorOverride={props.colorOverride}
    >
      <FileIcon />
    </Shortcut>
  );
};

export default FileShortcut;