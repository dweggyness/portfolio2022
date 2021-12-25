import React, {useState, useRef, useEffect} from 'react';
import styles from '../styles/components/ParallaxBG.module.css';

export default function ParallaxBG(props) {
  const { children } = props;
  const parent = useRef();
  
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    console.log('st', e.target.scrollTop);
    const position = e.target.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (parent) {
      parent.current.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        parent.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [parent]);

  
  return (
    <div ref={parent} className={styles.parallax}>
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
      <div className={styles.parallax__cover}>
        {children}
      </div>
    </div>
  )
}
