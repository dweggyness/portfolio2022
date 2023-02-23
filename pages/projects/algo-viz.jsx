import React from 'react';
import styles from '../../styles/pages/AlgoViz.module.css'
import Footer from '../../components/Footer.jsx'
import Navbar from '../../components/Navbar.jsx'
import BloomFilter from '../../components/algo-viz/BloomFilter.jsx'
import LinearHash from '../../components/algo-viz/LinearHash.jsx'
import EHTHash from '../../components/algo-viz/EHTHash.jsx'

export default function AlgoViz() {
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
      <h1 className={styles.titleContainer}>
        d3.js algorithm visualizations
      </h1>
      <p className={styles.descriptionContainer}>
        Data visualizations done under the Human-Data Interaction Lab in NYU Abu Dhabi.
        I was responsible for building algorithm visualizations of some algorithms
        commonly used in a Computer Science course called Database Management Systems.
      </p>
      <p className={styles.descriptionContainer}>
        Those algorithms were made to help students understand algorithms by visualizing them and providing
        an interactive way of playing with the parameters of the algorithm.
      </p>

      <p className={styles.descriptionContainer}>
        Below are demos of some of the algorithms that I've built using <span className={styles.highlight}>D3.js</span>. 
        Please note that those algorithms were <span className={styles.highlight}>not built for this site or mobile</span> in mind. There may be some problems with
        your experience of the demo and I apologize in advance if it does not work as well as it should.
        
      </p>
      
      <p className={styles.descriptionContainer}>
        <h2>Bloom Filters</h2>
        A "space-efficient probabilistic data structure".
        False positive matches are possible. However, false negatives are not, so it provides an efficient way of testing whether an element exists in a set.
        Allows for searching and insertion in O(n) time in O(m) space.
      </p>
      <p />
      <div className={styles.vizContainer}>
        <BloomFilter />
      </div>

      <p className={styles.descriptionContainer}>
        <h2>Linear Hashing</h2>
      </p>
      <p />
      
      <div className={styles.vizContainer}>
        <LinearHash />
      </div>

      <p className={styles.descriptionContainer}>
        <h2>Extendible Hashing</h2>
      </p>
      
      <div className={styles.vizContainer}>
        <EHTHash />
      </div>
      </main>
      <Footer />
    </>
  )
}
