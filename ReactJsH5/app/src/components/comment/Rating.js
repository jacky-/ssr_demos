import React, { PureComponent } from 'React';

import * as RatingIcon from './RatingIcon.js';

const iconStyle = {
    svgBox: {
        marginRight: '.12rem',
        width: '1.024rem',
        height: '1.024rem',
        overflow: 'hidden',
    },
    cur: {
        transform: 'scale(.1)',
        fill: '#4289FF'
    },
    default: {
        transform: 'scale(.1)',
        fill: '#CCC'
    }
};

const ragingStyles = {
    ratingItemBox: {
        display: 'flex',
    },
    label: {
        width: '1.2rem',
        fontSize: '.36rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreBox: {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        marginRight: '.2rem'
    }
};


/**
 * @param
 */

const RatingItem = ({ mark = false, score = 0 }) => (
    <svg>
        <g style={mark ? iconStyle.cur : iconStyle.default}>
            {score == 0 && RatingIcon.L2}
            {score == 1 && RatingIcon.L1}
            {score == 2 && RatingIcon.L2}
            {score == 3 && RatingIcon.L2}
            {score == 4 && RatingIcon.L4}
            {score == 5 && RatingIcon.L5}
        </g>
    </svg>
);
const RatingLabel = ({ text = '' }) => <span>{text}</span>;




export default class Rating extends PureComponent {

    static defaultProps = {
        ratingModel: {
            'ratingId_01': {
                label: '位置',
                rating: 0
            },
            'ratingId_02': {
                label: '大小',
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
                const ratingDomItem = [];
                for (let score = 1; score <= this.maxRating; score++) {
                    ratingDomItem.push(
                        <div
                            onClick={this.rating.bind(this, rKey, score)}
                            key={`${rKey}__${score}`}
                            style={iconStyle.svgBox}
                        >
                            <RatingItem
                                score={modelELe.rating}
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
                    <div
                        key={rKey}
                        style={ragingStyles.label}
                    >
                        <RatingLabel
                            text={modelELe.label}
                        />
                        </div>
                        <div
                            style={ragingStyles.scoreBox}
                        >
                            {ratingDomItem}
                        </div>
                    </div>
                ));
            }
            return <div>{doms}</div>;
        })()
    }

}
