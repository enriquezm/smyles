import Image from 'next/image';

const AboutMeContent = () => {
  return (
    <>
      <Image 
        src="/profile.png"
        alt="pixel art portrait of myles"
        width={210}
        height={210}
      />
      <p>Hey! My name is myles.</p>
      <p>I'm a frontend dev working out of vegas.</p>
      <p>I enjoy anything that involves fui, pixel art, and cyberpunk.</p>
      <p>I live with my two cats, Finn and Felix. You might actually see them around here somewhere...</p>
    </>
  );
}

export default AboutMeContent;