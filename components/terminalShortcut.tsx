import ExeShortcut from './exeShortcut';
import TerminalIcon from './icons/terminalIcon';

type Props = {
  title: string;
  colorOverride?: string;
} 

const TerminalShortcut = (props: Props) => {
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