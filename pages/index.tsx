import Head from 'next/head';
import Store from '../components/store';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import DirectoryShortcut from '../components/directoryShortcut';
import FileShortcut from '../components/fileShortcut';
import GithubOutclickShortcut from '../components/outclickShortcuts/githubOutclickShortcut';
import LinkedinOutclickShortcut from '../components/outclickShortcuts/linkedinOutclickShortcut';
import styled, { ThemeProvider } from 'styled-components';
import theme, { color } from '../theme';
import { getSortedSprintsData } from '../lib/sprints'
import { getSortedProjectsData } from '../lib/projects';
import MessageBoard from '../components/messageBoard';
import AllActiveWindows from '../components/allActiveWindows';
import { db, postToJSON } from '../lib/firebase';

import { collection, getDocs, orderBy, query } from "firebase/firestore"; 
import AboutMeContent from '../components/aboutMeWindow';
import TerminalShortcut from '../components/terminalShortcut';

export async function getStaticProps() {
  const allSprintsData = await getSortedSprintsData();
  const allProjectsData = getSortedProjectsData();

  const cyberLogMessages = [];

  const q = query(collection(db, 'messages'), orderBy('createdAt'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const newDoc = {
      message: data.message,
      createdAt: data.createdAt,
    };

    cyberLogMessages.push(newDoc);
  }); 

  return {
    props: {
      allSprintsData,
      allProjectsData,
      cyberLogMessages,
    }
  }
}

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function HomePage({ allSprintsData, allProjectsData, cyberLogMessages }) {
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
      <ThemeProvider theme={theme}>
        <Store>
          <NavBar />
          <Desktop>
            <FileShortcut
              title="about_me.txt" 
              content={<AboutMeContent/>}
            />
            <DirectoryShortcut 
              title="bits"
              folderColor={color.turquoise}
              content={sprints}
            />
            <DirectoryShortcut 
              title="projects"
              content={projects}
              isDisabled={true}
            />
            {/* <TerminalShortcut
              title="cyberGreet.exe"
            /> */}
            <GithubOutclickShortcut title="github" />
            <LinkedinOutclickShortcut title="linkedin" />

            {/* <MessageBoard cyberLogMessages={cyberLogMessages} /> */}

            <AllActiveWindows />
          </Desktop>
          <Footer />
        </Store>
      </ThemeProvider>
    </>
  );
}
