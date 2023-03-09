import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button className={styles.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;