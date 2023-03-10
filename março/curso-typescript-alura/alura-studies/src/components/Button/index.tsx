import React from 'react';
import styles from './Button.module.scss';

interface IButton {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

class Button extends React.Component<IButton> {
  type: "button" | "submit" | "reset" | undefined;

  constructor(props: IButton) {
    super(props);
    this.type = props.type || "button";
  }

  render() {
    return (
      <button type={this.type} className={styles.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;