import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ProjectsPage(props) {
  const { isHomePage } = props;

  return (
    <nav className={`${styles.navbar} ${!isHomePage && styles.stickyBackgroundNavbar}`}>
      {isHomePage ? <div />
        : <div>
          <h1 className={`${styles.titleText} ${styles.scaleOnHover} ${styles.underlineOnHover}`} style={{ marginBottom: '4px' }}>
            <Link href="/">
              Jun
            </Link>
          </h1>
        </div>}

      <div>
        <a className={styles.underlineOnHover} target="_blank" rel="noreferrer" href='https://github.com/dweggyness/'>
          <FaGithub className={styles.scaleOnHover} size='2rem' />
        </a>
        <a className={styles.underlineOnHover} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/ooi-jun-ming-1695251a9/'>
          <FaLinkedin className={styles.scaleOnHover} size='2rem' />
        </a>
        <span className={`${styles.underlineOnHover} ${styles.scaleOnHover} ${styles.navbarText}`}>
          <Link href="/projects">
            Projects
          </Link>
        </span>
        <span className={`${styles.underlineOnHover} ${styles.scaleOnHover} ${styles.navbarText}`}>
          <Link href="https://ojmming.substack.com/">
            Blog
          </Link>
        </span>
        <span className={`${styles.underlineOnHover} ${styles.scaleOnHover} ${styles.navbarText}`}>
          <Link href="/resume.pdf">
            Resume
          </Link>
        </span>
      </div>
    </nav>
  )
}


