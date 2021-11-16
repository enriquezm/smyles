import { useState } from 'react';
import Window from './window';
import { v4 as uuid4 } from 'uuid';

const WelcomeWindow = () => {
  const [id] = useState(uuid4())

  return (
    <Window
      key={id}
      id={id}
      title="welcome.txt" 
    >
      <p>Hey! Welcome to smyles.net</p>
      <p>Wondering wtf this site is about? It's my place on the web to dump my thoughts/ideas/experiments.</p>
      <p>On the left you'll find some shortcuts to my content. Have fun and take a look around.</p>
      <p>Who knows, maybe you'll find some easter eggs around here...</p>
    </Window>
  );
}

export default WelcomeWindow;