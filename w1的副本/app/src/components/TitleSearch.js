import React, { PureComponent } from "react";
import mainPageStyle from '_css/mainPage.css';

export default class TitleSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.timmer = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler(event) {
    if (this.timmer) {
      clearTimeout(this.timmer);
    }
    this.timmer = setTimeout(() => {
      const sy = event.srcElement.documentElement.scrollTop;
      console.log(sy);
    }, 100);
  }

  render() {
    return (
      <div
        className={mainPageStyle.headerSearchBox}
      >
        <div
          className={mainPageStyle.headerSearchBoxLeft}
        >
          <span
            className={mainPageStyle.headerSearchBoxLeft_span}
          >搜索:目的地/酒店/景点/航班号</span>
        </div>
        <div
          className={mainPageStyle.headerSearchBoxRight}
        >
          <span
          >我的</span>
        </div>
      </div>
    );
  }
}
