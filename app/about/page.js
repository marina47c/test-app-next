import Image from 'next/image';
import classes from './page.module.css';
import districtImage from '@/assets/gajnice.jpg';

const About = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Pratimo zgode u kvartu
        </h1>
        <p>Pridružite se kvartu i budite dio svakodnevnih zgoda! </p>
        <p>Pratimo zbivanja iz dana u dan...</p>
      </header>
      <main className={classes.main}>
          {/* <Image src={districtImage.src} fill className={classes.image}/> */}
      </main>
    </>
  );
}

export default About;