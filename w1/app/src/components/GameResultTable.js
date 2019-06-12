import React, { PureComponent } from "react";
import {
  TheadBlankCell,
  TheadRoundCell,
  NumbersCell,
  NameCell,
  DetailCell,
  GameDetail
} from '_cp/Cells.js';
import style from '_css/mainPage.css'

export default class GameResultTable extends PureComponent {
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
    return Object.keys(this.props.nameDict).map((palyerName, index) => (
      <tr
        key={index}
      >
        <NumbersCell
          numberStr={this.props.nameDict[palyerName]}
        />
        <NumbersCell
          numberStr={palyerName}
        />
        {
          this.props.ps.map((psEle, idx) => {
            const playerA = psEle[0];
            const playerB = psEle[1];
            let opponentCode, score;
            if (playerA === palyerName) {
              opponentCode = this.props.nameDict[psEle[1]]
              score = psEle[2];
            } else if (playerB === palyerName) {
              opponentCode = this.props.nameDict[psEle[0]]
              score = psEle[3];
            } else {
              return (
                <GameDetail
                  key={idx}
                />
              )
            }
            return (
              <GameDetail
                key={idx}
                opponentCode={opponentCode}
                score={score}
              />
            );
          })
        }
      </tr>
    ))
  }


  render() {
    return (
      <table
        className={style.table}
      >
        {this.renderTableHead()}
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }



}
