/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

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
        let style_div_p = {
            padding: '5px 15px'
        }
        let style_span = {
            display: 'inline-block', background: '#FFFFFF', padding: '5px 8px', marginRight: '5%', marginBottom: '5px', fontSize: '0.8em'
        }

        let hot = this.props.hotList;
        let hots = hot.hotData.map(function(elem, index) {
            return (
                <span
                    ref="hotText"
                    style={style_span}
                    key={index}
                >
                    {elem.text}
                </span>
            )
        });

        return (
            <div>
                <p style={style_div_p} onClick={this.hotClick}>
                    {hots}
                </p>
            </div>
        )
    }
}