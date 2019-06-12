import React, { PureComponent } from "react";
import style from '_css/mainPage.css'


export const TheadBlankCell = () => (
  <td
    className={style.TheadBlank}
    colSpan={2}
  >
  </td>
);
export const TheadRoundCell = ({ roundStr }) => (
  <td
    className={style.TheadRoundCell}
    colSpan={2}
  >
    {roundStr}
  </td>
);

export const NumbersCell = ({ numberStr }) => (
  <td
    className={style.NumbersCell}
  >
    {numberStr}
  </td>
);

export const NameCell = ({ nameStr }) => (
  <td
    className={style.NameCell}
  >
    {nameStr}
  </td>
);

export const GameDetail = ({
  opponentCode = '',
  score = '',
} = {}) => (
  <React.Fragment>
    <DetailCell
      detailStr={opponentCode}
    />
    <DetailCell
        style={score > 0 ? {
          color: 'red'
        } : null}
        detailStr={score}
    />
  </React.Fragment>
);

export const DetailCell = ({ detailStr = '', style}) => (
  <td
    style={style}
  >
    {detailStr}
  </td>
);
