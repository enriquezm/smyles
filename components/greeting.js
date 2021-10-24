import Emoji from './emoji';
import styled from 'styled-components';

const Container = styled.span`
  margin: 0;
`;

const Greeting = () => {
  let emoji = <Emoji symbol="🐑" label="sheep"/>;

  let greeting = 'evening';
  const currentTime = Date();

  const startMorning = new Date();
  startMorning.setHours(5,0,0);

  const startAfternoon = new Date();
  startAfternoon.setHours(12,0,0);

  const startEvening = new Date();
  startEvening.setHours(17, 0, 0); 

  if (currentTime >= startMorning &&  currentTime < startAfternoon ) {
    greeting = 'morning';
    emoji = <Emoji symbol="☕" label="coffee"/>
  } else if (currentTime >= startAfternoon && currentTime < startEvening  ) {
    greeting = 'afternoon';
    emoji = <Emoji symbol="🍛" label="curry rice"/>
  } else {
    greeting = 'evening';
    emoji = <Emoji symbol="😴" label="sleeping face"/>
  }

  return (<Container>good {greeting} {emoji}.</Container>);
};

export default Greeting;
