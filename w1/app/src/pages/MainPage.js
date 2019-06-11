import React from "react";

import GameResultTable from '_cp/GameResultTable.js';

import style from '_css/mainPage.css'

const ps = [
  ['张三', '李四', 0, 1, 2],
  ['张三', '王五', 0, 2, 2],
  ['王五', '李四', 2, 0, 3],
];

const nameDict = {
  '张三': 1,
  '李四': 2,
  '王五': 3,
}

const MainPage = () => (
  <div className={style.pageBox}>
    <GameResultTable
      ps={ps}
      nameDict={nameDict}
    />
  </div>
);



export default MainPage;
