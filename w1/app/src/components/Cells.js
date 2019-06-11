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

export const DetailCell = ({ detailStr }) => (
  <td
    className={style.detailStr}
  >
    {detailStr}
  </td>
);
