/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

/*scss*/
require('./styles/nav.less')

/*const*/
import * as con from 'utils/const';

/*files*/
const search = require('./../../containers/Home/files/search.svg');
const nav_1 = require('./files/nsyjr.png');
const nav_2 = require('./files/nlswx.png');
const nav_3 = require('./files/nflwx.png');
const nav_4 = require('./files/nyysj.png');
const nav_5 = require('./files/nxxjs.png');
const nav_6 = require('./files/nyssj.png');
const nav_7 = require('./files/nyyjs.png');
const nav_8 = require('./files/nydjk.png');
const nav_9 = require('./files/nother.png');


export class Nav extends Component {

    static propTypes = {
        navList: React.PropTypes.object
    }

    static navImage = {
        [con.NAV_IMAGE_1]: nav_1,
        [con.NAV_IMAGE_2]: nav_2,
        [con.NAV_IMAGE_3]: nav_3,
        [con.NAV_IMAGE_4]: nav_4,
        [con.NAV_IMAGE_5]: nav_5,
        [con.NAV_IMAGE_6]: nav_6,
        [con.NAV_IMAGE_7]: nav_7,
        [con.NAV_IMAGE_8]: nav_8,
        [con.NAV_IMAGE_9]: nav_9
    }

    render() {
        let navDetails = this.props.navList;
        if (!navDetails.navMain) {
            return false
        } else {
            var navComponent = navDetails.navMain.map((elem, index) => {
                return (
                    <li key={index} className="style_li">
                        <img src={Nav.navImage[index+1]} className="style_img" />
                        <span className="style_span">{elem.text}</span>
                    </li>
                )
            });
        }

        return (
            <div className="style_div">
                <ul className="style_ul">
                    {navComponent}
                </ul>
            </div>
        )
    }
}
