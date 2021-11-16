import ExeShortcut from './exeShortcut';
import TerminalIcon from './terminalIcon';

const TerminalShortcut = (props) => {
  return (
    <ExeShortcut
      title={props.title}
      colorOverride={props.colorOverride}
    >
      <TerminalIcon />
    </ExeShortcut>
  );
};

export default TerminalShortcut;