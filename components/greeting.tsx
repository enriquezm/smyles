import Emoji from './emoji';
import styled from 'styled-components';

const Container = styled.span`
  margin: 0;
`;

const Greeting = () => {
  let emoji = <Emoji symbol="👋" label="waving hand"/>;

  let greeting = 'hey there!';
  const currentTime = new Date();

  const startMorning = new Date();
  startMorning.setHours(5,0,0);

  const startAfternoon = new Date();
  startAfternoon.setHours(12,0,0);

  const startEvening = new Date();
  startEvening.setHours(17, 0, 0); 

  if (currentTime >= startMorning &&  currentTime < startAfternoon ) {
    greeting = 'good morning';
    emoji = <Emoji symbol="☕" label="coffee"/>
  } else if (currentTime >= startAfternoon && currentTime < startEvening  ) {
    greeting = 'good afternoon';
    emoji = <Emoji symbol="✌️" label="peace hand"/>
  } else {
    greeting = 'good evening';
    emoji = <Emoji symbol="😴" label="sleeping face"/>
  }

  return (<Container>{greeting} {emoji}.</Container>);
};

export default Greeting;
