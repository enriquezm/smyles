import { v4 as uuid4 } from 'uuid';
import Window from '../components/window';

function HomePage() {
  const aboutMeId = uuid4();

  return (
    <div>
      <Window
        id={aboutMeId}
        title="README.txt" 
      >
        <p>Hey! My name is Myles.</p>
      </Window>
    </div>);
}

export default HomePage;
