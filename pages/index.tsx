import Head from 'next/head';
import Store from '../components/store';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import DirectoryShortcut from '../components/directoryShortcut';
import FileShortcut from '../components/fileShortcut';
import GithubOutclickShortcut from '../components/outclickShortcuts/githubOutclickShortcut';
import LinkedinOutclickShortcut from '../components/outclickShortcuts/linkedinOutclickShortcut';
import { getSortedSprintsData } from '../lib/sprints'
import { getSortedProjectsData } from '../lib/projects';
import AllActiveWindows from '../components/allActiveWindows';
import AboutMeContent from '../components/aboutMeWindow';

import { useState } from 'react';
import WelcomeInfoPopup from '../components/popups/welcomeInfoPopup';
import styled, { createGlobalStyle } from 'styled-components';
import { color } from '../theme';

// TODO: Abstract out into module
const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --black: #000;
    --white: #fff;
    --offBlack: #01020A;
    --purple: #8777C6;
    --yellow: #E6FF4A;
    --turquoise: #25FFCB;
    --pink: #FF327C;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    background-color: var(--offBlack);
    height: 100vh;
    margin: 0;
    position: relative;
  }

  a {
    color: var(--yellow);
  }
`;

export async function getStaticProps() {
  const allSprintsData = await getSortedSprintsData();
  const allProjectsData = getSortedProjectsData();

  return {
    props: {
      allSprintsData,
      allProjectsData,
    }
  }
}

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default function HomePage({ allSprintsData, allProjectsData }) {
  const [displayWelcome, setDisplayWelcome] = useState(true);

   const projects = allProjectsData.map(({ id, title, date }) => (
    <li key={id}>{title} {date}</li>
  ));

  const sprints = allSprintsData.map(({ id, title, content }) => (
    <FileShortcut
      colorOverride={color.black} 
      key={id} 
      title={title} 
      content={content}
    />
  ));

  return (
    <>
      <Head>
        <title key="title">That Guy That Codes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles/>
      <Store>
        <NavBar />
        <Desktop>
          { displayWelcome && <WelcomeInfoPopup /> }
          <FileShortcut
            title="about_me.txt" 
            content={<AboutMeContent/>}
          />
          {/* <DirectoryShortcut 
            title="bits"
            content={sprints}
          /> */}
          <DirectoryShortcut 
            title="projects"
            content={projects}
          />
          <GithubOutclickShortcut title="github" />
          <LinkedinOutclickShortcut title="linkedin" />

          <AllActiveWindows />
        </Desktop>
        <Footer />
      </Store>
    </>
  );
}
