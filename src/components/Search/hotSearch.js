/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

require('./styles/hotSearch.scss')

export class HotSearch extends Component {

    constructor(props) {
        super(props);
        this.hotClick = this.hotClick.bind(this);
    }

    static propTypes = {
        hotList: React.PropTypes.object,
        hotClick: React.PropTypes.func
    }

    hotClick() {
       let text = this.refs.hotText;
        console.log(text);
    }

    componentDidMount() {
        //let text = this.refs.hotText;
    }

    render() {

        let hot = this.props.hotList;
        let hots = hot.hotData.map(function(elem, index) {
            return (
                <span
                    ref="hotText"
                    className="style_span"
                    key={index}
                >
                    {elem.text}
                </span>
            )
        });

        return (
            <div>
                <p className="style_div_p" onClick={this.hotClick}>
                    {hots}
                </p>
            </div>
        )
    }
}