import FileShortcut from "./fileShortcut";

const AboutMeShortcut = () => {
  return (
    <FileShortcut
    type="popup"
    heading="about_me.txt" 
    content="<p>Hey! My name is Myles.</p>
    <p>I'm a frontend engineer working out of Vegas.</p>
    <p>I enjoy building robust UI. I try to empathize with the user and build a UI that they can connect with. I do this by studying how video games, movies, and experiences overall captivate people and sprinkle that into the UI I build.</p>
    <p>I live with my wife and two cats (Finn and Felix). You might actually see them around here somewhere...</p>"
  />
  );
}

export default AboutMeShortcut;