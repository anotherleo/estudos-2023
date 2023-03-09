import React from 'react'
import Button from '../Button'
import Clock from './Clock'
import styles from './Chronometer.module.scss'

export default function Chronometer() {
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Clock />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}
