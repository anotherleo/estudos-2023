import React from 'react'
import styles from './Clock.module.scss'

export default function Clock() {
  return (
    <>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
    </>
  )
}
