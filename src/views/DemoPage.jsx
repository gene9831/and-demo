import * as React from 'react';
import * as utils from '../lowcode/utils.js';
import './DemoPage.css';
import {
  Button as AntdButton,
  Checkbox as AntdCheckbox,
  Input as AntdInput,
} from 'antd';

export default class DemoPage extends React.Component {
  state = {
    checkOptions: [
      { label: '早起晨练', value: '早起晨练' },
      { label: '准备早餐', value: '准备早餐' },
      { label: '阅读名著', value: '阅读名著' },
      { label: '学习React', value: '学习React' },
      { label: '看剧放松', value: '看剧放松' },
    ],
    checked: ['准备早餐'],
    inputValue: '',
  };

  constructor(props) {
    super(props);
    this.utils = utils;
  }

  componentDidMount() {
    console.log(this);
  }

  onCheckedChange = (value) => {
    this.setState({ checked: value });
  };
  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  onAdd = (event) => {
    if (
      this.state.checkOptions.some(
        (option) => option.value === this.state.inputValue
      )
    ) {
      return;
    }

    this.setState({
      checkOptions: this.state.checkOptions.concat({
        label: this.state.inputValue,
        value: this.state.inputValue,
      }),
      inputValue: '',
    });
  };

  render() {
    return (
      <div className=" container">
        <h1>代办</h1>
        <AntdCheckbox.Group
          value={this.state.checked}
          type="array"
          options={this.state.checkOptions}
          className="todo"
          id=""
          onChange={this.onCheckedChange}
        ></AntdCheckbox.Group>
        <div className=" adder">
          <AntdInput
            className="antdinput-oguuv"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          ></AntdInput>
          <AntdButton onClick={this.onAdd}>
            <span>添加</span>
          </AntdButton>
        </div>
      </div>
    );
  }
}
