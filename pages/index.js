import { v4 as uuid4 } from 'uuid';
import Head from 'next/head';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import Window from '../components/window';
import WelcomeWindow from '../components/welcomeWindow';
import DirectoryShortcut from '../components/directoryShortcut';
import FileShortcut from '../components/fileShortcut';
import styled, { ThemeProvider } from 'styled-components';
import theme, { color } from '../theme';
import { getSortedSprintsData } from '../lib/sprints'
import { getSortedProjectsData } from '../lib/projects';

export async function getStaticProps() {
  const allSprintsData = getSortedSprintsData();
  const allProjectsData = getSortedProjectsData();

  return {
    props: {
      allSprintsData,
      allProjectsData
    }
  }
}

const Container = styled.div`
    display: grid;
    gap: 24px;
`;

export default function HomePage({ allSprintsData, allProjectsData }) {
  const aboutMeId = uuid4();

  const mockAboutMeData = {
    content:
      <>
        <p>Eww! I hate introductions. But if I must, I'm a frontend dev working out of Vegas.</p>
        <p>I enjoy coffee, binge watching horror shows, and building stuff (not just software, legos are cool too).</p>
        <p>My inspiration comes from video games, cartoons, and 80's hacker movies. Love that shit.</p>
        <p>Okay, can we stop with the intro now? I really have nothing else to tell ya...</p>
      </>
  };

  const projects = allProjectsData.map(({id, title, date}) => (
    <li key={id}>{title} {date}</li>
  ));

  const sprints = allSprintsData.map(({id, title, date}) => (
    <li key={id}>{title} {date}</li>
  ));

  return (
    <>
      <Head>
        <title key="title">smyles.net</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div>
          <FileShortcut 
            title="about_me.txt"
            content={mockAboutMeData.content}
            disabled={false}
          />
          <DirectoryShortcut 
            title="sprints/"
            folderColor={color.turquoise}
            content={sprints}
          />
          <DirectoryShortcut 
            title="projects/"
            content={projects}
            // isDisabled={true}
          />
          <WelcomeWindow />  
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
