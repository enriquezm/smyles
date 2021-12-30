import Head from 'next/head';
import GlobalState from '../components/globalState';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import DirectoryShortcut from '../components/directoryShortcut';
import FileShortcut from '../components/fileShortcut';
import GithubOutclickShortcut from '../components/outclickShortcuts/githubOutclickShortcut';
import LinkedinOutclickShortcut from '../components/outclickShortcuts/linkedinOutclickShortcut';
import { getSortedPostsData } from '../lib/posts'
import AllActiveWindows from '../components/allActiveApps';

import styled, { createGlobalStyle } from 'styled-components';
import AboutMeShortcut from '../components/aboutMeShortcut';

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
  }

  a {
    color: var(--yellow);
  }
`;

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default function HomePage({ allPostsData, allProjectsData }) {
  const posts = allPostsData.map(({ id, title, content }) => (
    <FileShortcut
      key={id}
      type='popup'
      heading={title} 
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
      <GlobalState>
        <NavBar />
        <Desktop>
          <AboutMeShortcut /> 
          <DirectoryShortcut 
            heading="posts/"
            content={posts}
          />
          <GithubOutclickShortcut href="https://github.com/enriquezm" title="github" />
          <LinkedinOutclickShortcut href="https://www.linkedin.com/in/mylesenriquez/" title="linkedin" />

          <AllActiveWindows />
        </Desktop>
        <Footer />
      </GlobalState>
    </>
  );
}
