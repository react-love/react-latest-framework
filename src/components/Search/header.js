/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

require('./styles/header.less')

const back = require('./files/back_search.png');
const search = require('./files/search_1.png');

export class Header extends Component {

    render() {

        return (
            <div className="style_body">
                <div className="style_main">
                    <Link to="/home" className="style_a">
                        <img src={back} className="style_a_img" />
                    </Link>
                    <div className="style_div_content">
                        <img src={search} className="style_div_img" />
                        <input type="text" placeholder="搜索书名" className="style_div_input" />
                    </div>
                    <Link to="/search" className="style_right_a">搜索</Link>
                </div>
            </div>
        )
    }
}