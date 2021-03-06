import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getStaticProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return {
      ...page,
      styleTags
    }
  }

  render() {
    const comment = `<!-- 
    _______  __   __  _______ 
    |       ||  | |  ||       |
    |  _____||  | |  ||    _  |
    | |_____ |  |_|  ||   |_| |
    |_____  ||       ||    ___|
     _____| ||       ||   |    
    |_______||_______||___|    
    
      Look at you using dev tools! Why not just check out the source code at: https://github.com/enriquezm/smyles? It's all there. Even better, just message me about it on my linkedin: https://www.linkedin.com/in/mylesenriquez/. 
      -->`;

    return (
      <Html>
        {/* <head dangerouslySetInnerHTML={{ __html: comment }}></head> */}
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet"/>
          <link rel="" href="/favicon.ico" />
        </Head>
        <body>
         <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
