import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../../components/Navbar.jsx'
import ProjectComponent from '../../components/ProjectComponent.jsx'
import styles from '../../styles/pages/Projects.module.css'
import { FaVideo } from 'react-icons/fa';
import { GiBattleship, GiTeapot, GiSecretBook } from 'react-icons/gi';
import { dwegsteaImg, netflixImg, battleshipsImg } from '../../public/images/projects';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        <h1 className={styles.titleContainer}>
          projects
        </h1>
        <p className={styles.descriptionContainer}>
          A collection of some things I've made before, whether it is for fun, a class or work.
        </p>

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
      </main>
    </>
  )
}
