import React, { PureComponent } from 'React';

/**
 * @param
 */

const RatingItem = ({ mark = false }) => <span>{mark ? 1 : 0}</span>;
const RatingLabel = ({ text = '' }) => <span>{text}</span>;

const ragingStyles = {
    ratingItemBox: {
        display: 'flex',
    },
    label: {
        width: '2rem'
    }
};


export default class Rating extends PureComponent {

    static defaultProps = {
        ratingModel: {
            'ratingId_01': {
                label: 'lb1',
                rating: 0
            },
            'ratingId_02': {
                label: 'lb2',
                rating: 0
            },
        },
        maxRating: 5,
        onRatingChange: () => null
    }

    constructor(props) {
        super(props);
        this.state = {
            ratingModel: props.ratingModel
        }
        this.maxRating = props.maxRating;
    }

    rating(key, score) {
        const pressItem = this.state.ratingModel[key];
        pressItem.rating = score;
        const newState = { ...this.state.ratingModel, ...{ [key]: pressItem } };
        this.setState({
            ratingModel: newState
        });
        this.props.onRatingChange(newState)
    }


    render() {
        return (() => {
            const doms = [];
            for (let rKey in this.state.ratingModel) {
                const modelELe = this.state.ratingModel[rKey];
                const ratingDomItem = [
                    <div
                        key={rKey}
                        style={ragingStyles.label}
                    >
                        <RatingLabel
                            text={modelELe.label}
                        />
                    </div>
                ];
                for (let score = 1; score <= this.maxRating; score++) {
                    ratingDomItem.push(
                        <div
                            onClick={this.rating.bind(this, rKey, score)}
                            key={`${rKey}__${score}`}
                        >
                            <RatingItem
                                mark={modelELe.rating >= score}
                            />
                        </div>
                    )
                }
                doms.push((
                    <div
                        key={rKey}
                        style={ragingStyles.ratingItemBox}
                    >
                        {ratingDomItem}
                    </div>
                ));
            }
            return <div>{doms}</div>;
        })()
    }

}
