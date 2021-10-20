import { v4 as uuid4 } from 'uuid';
import Window from '../components/window';

function HomePage() {
  const aboutMeId = uuid4();

  return (
    <div>
      <Window
        id={aboutMeId}
        title="test.txt" 
      />
      <Window
        id={uuid4()}
        title="about_me.txt"
      />
    </div>);
}

export default HomePage;
