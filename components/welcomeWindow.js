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
      <p>Building interfaces that convert, and are user friendly is great, don't get me wrong, but I also enjoy building shit just for the sake of building. With no rules, no constraints, no boundaries, it's just a lot more fun. Obviously, that's mostly through personal probjects, which is what you'll see here on smyles.net.</p>
      <p>Anyways! On the left you'll find some shortcuts to my content. Have fun and take a look around.</p>
      <p>Who knows, maybe you'll find some easter eggs around here...</p>
    </Window>
  );
}

export default WelcomeWindow;