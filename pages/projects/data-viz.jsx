import React from 'react';
import styles from '../../styles/pages/Data-Viz.module.css'
import Footer from '../../components/Footer.jsx'
import Navbar from '../../components/Navbar.jsx'
import BloomFilter from '../../components/data-viz/BloomFilter.jsx'
import LinearHash from '../../components/data-viz/LinearHash.jsx'
import EHTHash from '../../components/data-viz/EHTHash.jsx'

export default function DataViz() {
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
      <h1 className={styles.titleContainer}>
        d3.js data visualizations
      </h1>
      <p className={styles.descriptionContainer}>
        Data visualizations done under the Human-Data Interaction Lab in NYU Abu Dhabi.
        I was responsible for building algorithm visualizations of some algorithms
        commonly used in a Computer Science course called Database Management Systems.
      </p>
      <p className={styles.descriptionContainer}>
        Below are some of the algorithms that I've built using <span className={styles.highlight}>D3.js</span>
      </p>
      <div className={styles.vizContainer}>
        <BloomFilter />
      </div>
      
      <div className={styles.vizContainer}>
        <LinearHash />
      </div>

      
      <div className={styles.vizContainer}>
        <EHTHash />
      </div>
      </main>
      <Footer />
    </>
  )
}
