import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import styles from './List.module.scss';



export default function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
