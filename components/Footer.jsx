import React from 'react';
import styles from '../styles/components/Footer.module.css'
import { MdOutlineMail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className={styles.footer}>
      2023 © Jun Ming
      <div style={{ marginLeft: '0.8em' }} />
      •
      <div style={{ marginLeft: '0.9em' }} />
      <a href='https://aemail.com/gJm9' className={styles.button}>
        <MdOutlineMail></MdOutlineMail>
        <span>Contact Me</span>
      </a>
  </div>
  )
}
