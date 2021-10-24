import { v4 as uuid4 } from 'uuid';
import Head from 'next/head';
import NavBar from '../components/navBar';
import Window from '../components/window';
import DirectoryShortcut from '../components/directoryShortcut';
import FileShortcut from '../components/fileShortcut';
import styled, { ThemeProvider } from 'styled-components';
import theme, { color } from '../theme';

const Container = styled.div`
    display: grid;
    gap: 24px;
`;

function HomePage() {
  const aboutMeId = uuid4();

  const mockPostsData = [
    {
      title: 'Building this site',
      url: '#'
    },
    {
      title: 'Thinking in components',
      url: '#'
    }
  ];

  const mockAboutMeData = {
    content:
      <>
        <p>Eww! I hate introductions. But if I must, I'm a frontend dev working out of Vegas.</p>
        <p>I enjoy coffee, binge watching horror shows, and building stuff (not just software, legos are cool too).</p>
        <p>My inspiration comes from video games, cartoons, and 80's hacker movies. Love that shit.</p>
        <p>Okay, can we stop with the intro now? I really have nothing else to tell ya...</p>
      </>
  };

  const posts = mockPostsData.map((post) => {
    return <li key={post.title}><a href={post.url}>{post.title}</a></li>;
  })

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
            title="exercises/"
            folderColor={color.turquoise}
          />
          <DirectoryShortcut 
            title="projects/"
            content={posts}
            isDisabled={true}
          />

          <Window
            key={aboutMeId}
            id={aboutMeId}
            title="welcome.txt" 
          >
            <p>Hey! Welcome to smyles.net</p>
            <p>Wondering wtf this site is about? It's my place on the web to dump my thoughts/ideas/experiments.</p>
            <p>Building interfaces that convert, and are user friendly is great, don't get me wrong, but I also enjoy building shit just for the sake of building. With no rules, no constraints, no boundaries, it's just a lot more fun. Obviously, that's mostly through personal probjects, which is what you'll see here on smyles.net.</p>
            <p>Anyways! On the left you'll find some shortcuts to my content. Have fun and take a look around.</p>
            <p>Who knows, maybe you'll find some easter eggs around here...</p>
          </Window>
          {/* 

          <Window
            id="123"
            title="posts/" 
          >
            <ul>
              {posts}
            </ul>
          </Window> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
