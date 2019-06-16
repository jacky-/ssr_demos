import React, { PureComponent } from "react";
import Hammer from 'react-hammerjs';
import style from '_css/MainBanner.css';

const ImgEle = ({ url }) => (
  <img
    className={style.imgele}
    src={url} alt="ssss"/>
);



export default class MainBanner extends PureComponent {
  constructor(props) {
    super(props);
    this.timmer = null;
    this.defaultIndex = 1;
    this.ct = [
      <ImgEle
        url='https://dimg04.c-ctrip.com/images/zg0h15000000xdhht151F.png'
      />,
      <ImgEle
        url='https://dimg04.c-ctrip.com/images/zg0h15000000xdhmd3E4D.png'
      />,
      <ImgEle
        url='https://dimg04.c-ctrip.com/images/zg0n15000000xaz5hB069.png'
      />
    ];

    this.content = [];

    this.setAutoPlay = this.setAutoPlay.bind(this);
    this.releaseAutoPlay = this.releaseAutoPlay.bind(this);
    this.aotuSlide = this.aotuSlide.bind(this);
    this.slideToIndex = this.slideToIndex.bind(this);

    if (this.ct.length > 1) {
      this.firstEle = this.ct[0];
      this.lastEle = this.ct[this.ct.length - 1];

      this.content = [this.lastEle, ...this.ct, this.firstEle];
      this.defaultIndex = 1;
    } else {
      this.content = this.ct;
    }
    this.currentIndex = this.defaultIndex;
    this.state = {
      dur: '300ms',
      cIndex: this.defaultIndex
    };
  }

  componentDidMount() {
    if (this.content.length > 1) {
      this.setAutoPlay();
    }
  }

  componentWillUnmount() {
    this.releaseAutoPlay();
  }

  setAutoPlay() {
    this.autoPlayTimmer = setInterval(() => {
      this.aotuSlide();
    }, 2000);
  }

  releaseAutoPlay() {
    if (this.autoPlayTimmer) {
      clearTimeout(this.autoPlayTimmer);
    }
  }

  slideToIndex({
    index,
    d = 300
  } = {}) {
    this.setState({
      dur: `${d}ms`,
      cIndex: index
    }, () => {
        this.currentIndex = index;
    })
  }

  aotuSlide() {
    const nowIndex = this.currentIndex;
    let nextIndex = nowIndex + 1;
    let d = 300;
    if (nextIndex === this.content.length - 1) {
      setTimeout(() => {
        //已经是最后一张 需要立即返回第一张
        this.slideToIndex({
          index: this.defaultIndex,
          d: 0,
        });
      }, 301);
    }

    this.slideToIndex({
      index: nextIndex,
      d,
    });

  }

  onPan(e) {
    console.log('onPan', e);
  }

  onPanStart = (e) => {
    this.releaseAutoPlay();
    console.log('onPanStart', e);
  }

  onPanEnd = (e) => {
    this.setAutoPlay();
    console.log('onPanEnd', e);
  }

  handleClick = (e) => {
    console.log('handleClick', e);
    e.stopPropagation();
  }

  render() {
    return (
      <div
        className={style.MainBannerBox}
      >
        <Hammer
          // onPan={this.onPan}
          onPanStart={this.onPanStart}
          onPanEnd={this.onPanEnd}
        >
        <ul
          className={style.ct}
          onClick={this.handleClick}
          style={{
            transitionDuration: this.state.dur,
            transform: `translate3d(${this.state.cIndex * -7.5}rem, 0, 0)`
          }}
        >
          {(this.content && this.content.length > 0) &&
            this.content.map((ctele, index) => (
              <li
                key={index}
              >
                {ctele}
              </li>
            ))
          }
        </ul>
        </Hammer>
      </div>
    );
  }
}
