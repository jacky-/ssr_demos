import React, { PureComponent } from "react";
import Rating from '_cp/comment/Rating.js';

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
        <Rating
          onRatingChange={this.onRatingChange}
        />
      </div>
    );
  }
}
export default CommentSubmit;
