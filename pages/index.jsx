import React, {useState, useRef, useEffect} from 'react';
import styles from '../styles/pages/Home.module.css'
import CloudsBG from '../components/CloudsBG.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Link from 'next/link'
import { FaVideo, FaSoundcloud, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const scrollContainer = useRef();
  const nameContainer = useRef();
  const titleRef = useRef();

  const [lockTitle, setLockTitle] = useState(false);

  let nameContainerHeight = 0;

  const handleScroll = (e) => {
    const position = e.target.scrollTop;

    if (position > nameContainerHeight) {
      setLockTitle(true);
    } else {
      setLockTitle(false);
    }
  };

  const updateNameContainerHeight = () => {
    const nameContainerTop = nameContainer.current.offsetTop || 0;
    const titleTop = titleRef.current.offsetTop || 0;

    nameContainerHeight = window.innerHeight - (titleTop - nameContainerTop);
  }

  useEffect(() => {
    if (nameContainer && titleRef) {
      updateNameContainerHeight();
      // update the height when the title locks into place whenever window resizes
      window.addEventListener('resize', updateNameContainerHeight);
    }

    if (scrollContainer) {
      scrollContainer.current.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', () => {});
      scrollContainer.current.removeEventListener('scroll', handleScroll);
    }
  }, [scrollContainer, nameContainer, titleRef]);

  return (
    <>
      <div style={{opacity: lockTitle ? 0 : 1 }} className={styles.titleContainer}>
        <h1 ref={titleRef} className={styles.titleText}>Jun Ming</h1>
        <h3>Welcome to my website.</h3>
        
      </div>
      <div ref={scrollContainer} className={styles.parallax}>
        <Navbar isHomePage />
        
        <CloudsBG />
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__1}`}>
            <img src="./images/citylayers/cityLayer5.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__2}`}>
            <img src="./images/citylayers/cityLayer4.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__3}`}>
            <img src="./images/citylayers/cityLayer3.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__4}`}>
            <img src="./images/citylayers/cityLayer2.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__5}`}>
            <img src="./images/citylayers/cityLayer1.png"/>
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__6}`}>
            <img src="./images/citylayers/cityLayer0.png"/>
        </div>
        <section className={styles.mainContainer}>
          <div className={styles.aboutMe} style={{ margin: 0 }}>
            <p>
              Hello! My name is
            </p>
          </div>
          <div ref={nameContainer} className={styles.headerContainer}>
            <h1 style={{opacity: lockTitle ? 1 : 0 }} className={styles.titleText}>
              Jun Ming
            </h1>
          </div>
          <div className={styles.aboutMe}>
            <p>
              I&apos;m a <span className={styles.highlight}>Malaysian</span> junior at NYU Abu Dhabi.
              Interested in CS & IM.
            </p>
            <p>
              My interests change pretty often, but they usually come down to making something. Currently interested in making (cooking!) food.
              Also recently rekindled my interest in reading, most usually a Sci-Fi or literary fiction book!
            </p>
            <p>
              {`Here is my `}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.resumeHighlight}>
                <span className={styles.highlight}>resume.</span>
              </a>
            </p>
          </div>
          <Footer />
        </section>
      </div>
    </>
  )
}
