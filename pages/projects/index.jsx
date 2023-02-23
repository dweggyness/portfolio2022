import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import ProjectComponent from '../../components/ProjectComponent.jsx'
import styles from '../../styles/pages/Projects.module.css'
import { FaVideo, FaRegFileAlt } from 'react-icons/fa';
import { GiBattleship, GiTeapot } from 'react-icons/gi';
import { algoVizImg, dwegsteaImg, netflixImg, battleshipsImg } from '../../public/images/projects';

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
              title="Algorithm Visualizations"
              description="Visualizations of commonly-used algorithms in the course Database Management Systems. Work under the Human-Data Interaction Lab."
              eyecatchIcon={<FaRegFileAlt />}
              demoLink="/projects/algo-viz"
              img={algoVizImg}
            />
          <ProjectComponent 
              title="Dwegstea Tea Blog"
              description="A tea blog for me to write tea reviews. Uses a 3rd party CMS (Contentful) to add content! Hobby project. Out of date."
              eyecatchIcon={<GiTeapot />}
              githubLink="https://github.com/dweggyness/contentfulBlog"
              demoLink="https://dwegstea.netlify.app/"
              img={dwegsteaImg}
            />
          <ProjectComponent 
            title="Battleships"
            description="A full-stack battleship clone, supports online-multiplayer, or you can play against the AI! Hobby project."
            eyecatchIcon={<GiBattleship />}
            githubLink="https://github.com/dweggyness/battleships"
            demoLink="https://waterbound-fighting-vessels.herokuapp.com/"
            img={battleshipsImg}
          />
          <ProjectComponent 
            title="Netflix Reddit Discussion"
            description="A simple extension for my own use, displays reddit discussion threads for the current episode/show you just finished watching on Netflix."
            eyecatchIcon={<FaVideo />}
            githubLink="https://github.com/dweggyness/netflixRedditDiscussion"
            demoLink="https://chrome.google.com/webstore/detail/netflix-reddit-discussion/ihiibcpkgomehmkohaedaebejibmdnlm?hl=en"
            img={netflixImg}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
