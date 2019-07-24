import React, { PureComponent } from "react";
import Rating from '_cp/comment/Rating.js';
import style from '_css/CommentSubmit.css';

class CommentSubmit extends PureComponent {
  constructor(props) {
    super(props);
  }


  onRatingChange = (rates) => {
    console.log(rates)
  }

  render() {
    return (
      <div>
        <div className={style.box}>
            <Rating
              onRatingChange={this.onRatingChange}
            />
          </div>
      </div>
    );
  }
}
export default CommentSubmit;
