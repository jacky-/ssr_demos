import React, { PureComponent } from "react";
import {
  TheadBlankCell,
  TheadRoundCell,
  NumbersCell,
  NameCell,
  DetailCell
} from '_cp/Cells.js';
import style from '_css/mainPage.css'

export default class GameResultTable extends PureComponent {
  constructor(props) {
    super(props);

  }

  renderTableHead = () => (
    <thead>
      <tr>
        <TheadBlankCell />
        {
          this.props.ps.map((ele, index) => (
            <TheadRoundCell
              key={index}
              roundStr={`第${index + 1}轮`}
            />
          ))
        }
      </tr>
      <tr>
        <NumbersCell
          numberStr={'编号'}
        />
        <NameCell
          nameStr={'姓名'}
        />
        {
          this.props.ps.map((ele, index) => (
            <React.Fragment
              key={index}
            >
            <DetailCell
              key={`0${index}`}
              detailStr={'对手'}
            />
            <DetailCell
              key={`1${index}`}
              detailStr={'得分'}
            />
            </ React.Fragment>
          ))
        }
      </tr>
    </thead>
  );


  renderRows = () => {
    return Object.keys(this.props.nameDict).map((key, index) => (
      <tr
        key={index}
      >
        <NumbersCell
          numberStr={this.props.nameDict[key]}
        />
        <NumbersCell
          numberStr={key}
        />
        {
          this.props.ps.map((psEle, idx) => {

          })
        }
      </tr>
    ))
  }


  render() {
    return (
      <table>
        {this.renderTableHead()}
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }



}
