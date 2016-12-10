/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

require('./styles/hotSearch.less')

export class HotSearch extends Component {

    render() {
        const { hotText, hotClick } = this.props
        return (
            <span className="style_span"
                  onClick={hotClick}
            >
                {hotText}
            </span>
        )
    }
}