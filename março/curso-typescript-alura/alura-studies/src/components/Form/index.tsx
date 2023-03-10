import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Button from '../Button';
import styles from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:30:00"
  }

  addTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    );
    this.setState({
      tarefa: "",
      tempo: "00:30:00"
    })
  }

  render() {
    return (
      <form className={styles.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={e => this.setState({ ...this.state, tarefa: e.target.value })}
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            onChange={e => this.setState({ ...this.state, tempo: e.target.value})}
            required
          />
        </div>
        <Button type="submit">
          Adicionar
        </Button>
      </form>
    )
  }
}

export default Form;