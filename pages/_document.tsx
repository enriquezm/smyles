import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap" rel="stylesheet" />
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
