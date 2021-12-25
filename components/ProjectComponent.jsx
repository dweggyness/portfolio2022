import React from 'react';
import { FaExternalLinkAlt, FaRegCalendar, FaGithub } from 'react-icons/fa';
import styles from '../styles/components/ProjectComponent.module.css';
import Image from "next/image";

export default function ProjectComponent(props) {
  const { title, description, eyecatchIcon, githubLink, demoLink, date, img } = props;
  
  return (
    <section className={styles.project}>
      {eyecatchIcon && <div className={styles.eyecatchIcon}>{eyecatchIcon}</div>}
      <div className={styles.projectImageContainer}>
        {demoLink ?
          <a href={demoLink} target="_blank" rel="noreferrer">
            <Image
              className={styles.projectImage}
              src={img}
              alt={`Project picture for ${title}`}
              objectFit='contain'
            />
          </a>
          : <Image
          className={styles.projectImage}
          src={img}
          alt={`Project picture for ${title}`}
          objectFit='contain'
        /> }
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.dateContainer}>
          <span>{date}</span>
          <FaRegCalendar></FaRegCalendar>
        </div>

        <div className={styles.flexCol}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.buttonContainer}>
          {demoLink && <a href={demoLink} target="_blank" rel="noreferrer" className={styles.button}>
            <FaExternalLinkAlt></FaExternalLinkAlt>
            <span>Demo</span>
          </a> }
          {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" className={styles.button}>
            <FaGithub></FaGithub>
            <span>Github Link</span>
          </a> }
        </div>
      </div>
    </section>
  )
}
