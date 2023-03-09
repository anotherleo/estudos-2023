import React from 'react';
import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
      <Chronometer />
    </div>
  );
}

export default App;
