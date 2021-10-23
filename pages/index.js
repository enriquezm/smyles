import { v4 as uuid4 } from 'uuid';
import Window from '../components/window';
import DirectoryShortcut from '../components/directoryShortcut';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

function HomePage() {
  const aboutMeId = uuid4();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <DirectoryShortcut title="about_me.txt"/>
        <Window
          id={aboutMeId}
          title="welcome.txt" 
        >
          <p>Hey! Welcome to smyles.net, my very own place on the web to dump my thoughts/ideas/experiments.</p>
          <p>On the left you'll find some shortcuts to my content. Have fun and take a look around.</p>
          <p>Who knows, maybe you'll find some easter eggs around here...</p>
        </Window>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
