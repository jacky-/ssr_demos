import React, { PureComponent } from "react";
import TitleSearch from '_cp/TitleSearch.js';
import MainBanners from '_cp/MainBanners.js';
import style from '_css/mainPage.css'

const MainPage = () => (
  <div className={style.pageBox}>
    <TitleSearch />
    <div className={style.mainContentbox}>
    <MainBanners />
    </div>
    {/* <MainBanners />
    <SbuNav />
    <MainNav /> */}
  </div>
);



export default MainPage;
