import React from 'react'
import { ITarefa } from '../../../types/tarefa';
import styles from '../List.module.scss';

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
