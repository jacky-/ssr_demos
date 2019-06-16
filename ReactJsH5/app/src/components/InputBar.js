import React, { PureComponent } from "react";
import style from '_css/InputBar.css';

export default class InputBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('event', event.target);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={style.box}
      >
          <input
            type="text"
            className={style.input}
            value={this.state.value}
            onChange={this.handleChange}
          />
        <input
          type="submit"
          className={style.submitbtn}
          value="提交" />
      </form>
    );
  }
}
