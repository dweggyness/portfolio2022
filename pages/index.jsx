import React, {useState, useRef, useEffect} from 'react';
import styles from '../styles/pages/Home.module.css'
import CloudsBG from '../components/CloudsBG.jsx'
import ProjectComponent from '../components/ProjectComponent.jsx'
import { FaVideo, FaSoundcloud, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiBattleship, GiTeapot, GiSecretBook } from 'react-icons/gi';
import { MdOutlineMovie, MdOutlineMail } from 'react-icons/md';
import { dwegsteaImg, commlab1Img, commlab2Img, commlab3Img, commlab4Img, battleshipsImg } from '../public/images/projects';

export default function Home() {
  const scrollContainer = useRef();
  const nameContainer = useRef();
  const titleRef = useRef();

  const [lockTitle, setLockTitle] = useState(false);

  let nameContainerHeight = 0;

  // pass this a ref to YCoord you want to scroll to
  const scrollToAboutMe = () => {
    scrollContainer.current.scrollTo({ top: window.innerHeight - 100, behavior: "smooth"});
  }

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

    nameContainerHeight = window.innerHeight - (titleTop - nameContainerTop) + 10;
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
        <nav className={styles.navbar}>
          <a className={styles.underlineOnHover} target="_blank" rel="noreferrer" href='https://github.com/dweggyness/'>
            <FaGithub className={styles.socialIcon} size='2.5em'/>
          </a>
          <a className={styles.underlineOnHover} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ooi-jun-ming-1695251a9/'>
            <FaLinkedin className={styles.socialIcon} size='2.5em'/>
          </a>
          <a 
            onClick={() => scrollToAboutMe()} 
            className={`${styles.underlineOnHover} ${styles.socialIcon} ${styles.navbarText}`}
          >
            About
          </a>
        </nav>
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
          <div ref={nameContainer} className={styles.headerContainer}>
            
            <h1 style={{opacity: lockTitle ? 1 : 0 }} className={styles.titleText}>
              Jun Ming
            </h1>
          </div>
          <div className={styles.aboutMe}>
            <p>
              Hello! I&apos;m Jun. I&apos;m a <span className={styles.highlight}>Malaysian</span> sophomore at NYU Abu Dhabi.
              Interested in CS & IM.
            </p>
            <p>
              Outside of computers, I enjoy a good session of gongfu-style <span className={styles.highlight}>tea</span> brewing.
              I also play a little bit of piano. Currently
              compiling a list of the best Asian food places in Abu Dhabi.
            </p>
            <p>
              {`Here is my `}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.resumeHighlight}>
                <span className={styles.highlight}>resume.</span>
              </a>
            </p>
          </div>
          <section className={`${styles.headerContainer} ${styles.workHeader}`}>
            <h1 className={styles.headerText}>Works</h1>
          </section>
          <div className={styles.projectsContainer}>
            <ProjectComponent 
              title="How to Resolve a Conflict"
              description="CommLab Project 4 - Videoooo-oohh. A 3-step how-to video tutorial on how to resolve conflicts, stylized as a WikiHow page."
              eyecatchIcon={<MdOutlineMovie/>}
              githubLink="https://github.com/dweggyness/CommLab-Assignment4"
              demoLink="https://dweggyness.github.io/CommLab-Assignment4/"
              date="Nov 2021"
              img={commlab4Img}
            />
            <ProjectComponent 
              title="A Project To Die For"
              description="CommLab Project 3 - Sound. An audio story detailing four students intent on finishing a group project... at any cost."
              eyecatchIcon={<FaSoundcloud />}
              githubLink="https://github.com/dweggyness/CommLab-Assignment3"
              demoLink="https://dweggyness.github.io/CommLab-Assignment3/"
              date="Nov 2021"
              img={commlab3Img}
            />
            <ProjectComponent 
              title="An Aquarium Comic"
              description="CommLab Project 2 - Comic. A 6-panel interactive comic story on an aquarium and it's newest denizen. "
              eyecatchIcon={<GiSecretBook />}
              githubLink="https://github.com/dweggyness/CommLab-Assignment2"
              demoLink="https://dweggyness.github.io/CommLab-Assignment2/"
              date="Oct 2021"
              img={commlab2Img}
            />
            <ProjectComponent 
              title="Portal Story"
              description="CommLab Project 1 - FFMPEG. A short film recorded through Zoom, on what a world that has portals may look like."
              eyecatchIcon={<FaVideo />}
              githubLink="https://github.com/dweggyness/CommLab-Assignment1"
              date="Sept 2021"
              img={commlab1Img}
            />
          </div>
          <div className={styles.footer}>
            2021 © Jun Ming
            <div style={{ marginLeft: '0.8em' }} />
            •
            <div style={{ marginLeft: '0.9em' }} />
            <a href='https://aemail.com/gJm9' className={styles.button}>
              <MdOutlineMail></MdOutlineMail>
              <span>Contact Me</span>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
