import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/pages/Home.module.css'
import CloudsBG from '../components/CloudsBG.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import { FiPaperclip } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa';

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
      window.removeEventListener('resize', () => { });
      scrollContainer.current?.removeEventListener('scroll', handleScroll);
    }
  }, [scrollContainer, nameContainer, titleRef]);

  return (
    <>
      <div style={{ opacity: lockTitle ? 0 : 1 }} className={styles.titleContainer}>
        <h1 ref={titleRef} className={styles.titleText}>Jun Ming</h1>
        <h3>Welcome to my site!</h3>

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
          <img src="./images/citylayers/cityLayer1.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__6}`}>
          <img src="./images/citylayers/cityLayer0.png" />
        </div>
        <section className={styles.mainContainer}>
          <div>
            <div className={styles.aboutMe} style={{ margin: 0 }}>
              <p>
                Hello! My name is
              </p>
            </div>
            <div ref={nameContainer} className={styles.headerContainer}>
              <h1 style={{ opacity: lockTitle ? 1 : 0 }} className={styles.titleText}>
                Jun Ming
              </h1>
            </div>
            <div className={styles.aboutMe}>
              <p>
                I&apos;m a <span className={styles.highlight}>Malaysian</span> graduate from NYU Abu Dhabi.
                Graduated in 2024 with a BsC in Computer Science and a minor in Interactive Media.
              </p>
              <p>
                Currently interested in <span className={styles.highlight}>cooking, reading, writing, a weekly movie and playing the piano</span>. I don't think the gym counts as a hobby ( its kinda like doing the laundry ) so it's not in the list.
                <p />
                <span className={styles.highlight}>Cooking</span> - Trying to cook a new dish every week, but generally default to East/South-East Asian cuisines.
                <p />
                <span className={styles.highlight}>Reading</span> - Trying to read 36 books for 2024, from Sci-Fi to classics to literary fiction. Managed to read 33 books in 2023! Ask me for my Goodreads c:
                <p />
                <span className={styles.highlight}>Writing</span> - Trying to write 6 short essays by the end of next year ( peep my blog! ). I like writing about life, friendships and the human condition.
                <p />
                <span className={styles.highlight}>Movie</span> - Trying to watch Just One movie a week. Currently catching up on cult classics!
                <p />
                <span className={styles.highlight}>Piano</span> - Trying to improve my sight-reading. I'm mostly self-taught too! Currently working on Debussy's Clair de Lune.
              </p>
              <div className={styles.buttonHighlightContainer}>
                <a className={`${styles.button} ${styles.buttonHighlight} `} href={"/projects"} rel="noreferrer">
                  <>
                    <FaRocket style={{ marginRight: '6px', marginBottom: '-2px' }}></FaRocket>
                    <span>Projects</span>
                  </>
                </a>

                <a className={`${styles.button} ${styles.buttonHighlight} `} href={"/resume.pdf"} rel="noreferrer">
                  <>
                    <FiPaperclip style={{ marginRight: '4px', marginBottom: '-2px' }}></FiPaperclip>
                    <span>Resume</span>
                  </>
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  )
}

