import React, { PureComponent } from "react";
import TitleSearch from '_cp/TitleSearch.js';
import MainBanners from '_cp/MainBanners.js';
import InputBar from '_cp/InputBar.js';
import style from '_css/mainPage.css'

const MainPage = () => (
  <div
    className={style.pageBox}
  >
    <TitleSearch />
    <div className={style.mainContentbox}>
    <MainBanners />
    <InputBar />
    </div>
  </div>
);



export default MainPage;
