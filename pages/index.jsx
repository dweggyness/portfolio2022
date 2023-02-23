import React, {useState, useRef, useEffect} from 'react';
import styles from '../styles/pages/Home.module.css'
import CloudsBG from '../components/CloudsBG.jsx'
import ProjectComponent from '../components/ProjectComponent.jsx'
import Footer from '../components/Footer.jsx'
import { FaVideo, FaSoundcloud, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiBattleship, GiTeapot, GiSecretBook } from 'react-icons/gi';
import { MdOutlineMovie, MdOutlineMail } from 'react-icons/md';
import { dwegsteaImg, commlab1Img, commlab2Img, commlab3Img, commlab4Img, netflixImg, battleshipsImg } from '../public/images/projects';

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
        
        <nav className={styles.navbar}>
            <a className={styles.underlineOnHover} target="_blank" rel="noreferrer" href='https://github.com/dweggyness/'>
              <FaGithub className={styles.socialIcon} size='2rem'/>
            </a>
            <a className={styles.underlineOnHover} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ooi-jun-ming-1695251a9/'>
              <FaLinkedin className={styles.socialIcon} size='2rem'/>
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
              Hello! I&apos;m Jun. I&apos;m a <span className={styles.highlight}>Malaysian</span> junior at NYU Abu Dhabi.
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
          <section className={`${styles.headerContainer} ${styles.workHeader}`}>
            <h1 className={styles.headerText}>Works</h1>
          </section>
          <div className={styles.projectsContainer}>
            <ProjectComponent 
                title="Dwegstea Tea Blog"
                description="A tea blog for me to write tea reviews. Uses a 3rd party CMS (Contentful) to add content! Sadly out of date :("
                eyecatchIcon={<GiTeapot />}
                githubLink="https://github.com/dweggyness/contentfulBlog"
                demoLink="https://dwegstea.netlify.app/"
                date="Sept 2020"
                img={dwegsteaImg}
              />
            <ProjectComponent 
              title="Battleships"
              description="A full-stack battleship clone, supports online-multiplayer, or you can play against the AI!"
              eyecatchIcon={<GiBattleship />}
              githubLink="https://github.com/dweggyness/battleships"
              demoLink="https://waterbound-fighting-vessels.herokuapp.com/"
              date="June 2020"
              img={battleshipsImg}
            />
            <ProjectComponent 
              title="Netflix Reddit Discussion"
              description="A simple extension for my own use, displays reddit discussion threads for the current episode/show you just finished watching on Netflix."
              eyecatchIcon={<FaVideo />}
              githubLink="https://github.com/dweggyness/netflixRedditDiscussion"
              demoLink="https://chrome.google.com/webstore/detail/netflix-reddit-discussion/ihiibcpkgomehmkohaedaebejibmdnlm?hl=en"
              date="Nov 2020"
              img={netflixImg}
            />
          </div>
          <Footer />
        </section>
      </div>
    </>
  )
}
