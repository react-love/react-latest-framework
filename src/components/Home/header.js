/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

/*style*/
/*import { header } from 'style!./styles/header.scss';*/

/*files*/
const search = require('./files/search.svg');

export class Header extends Component {

    render() {

        let style_1 = {
            position: 'relative',
            width: '100%',
            background: '#00bb9c',
            color: '#fff',
            height: 40 + 'px',
            lineHeight: 40 + 'px',
            textAlign: 'center',
            fontSize: 1.2 + 'em'
        }
        let style_2 = {
            position: 'absolute',
            display: 'block',
            top: 0,
            color: '#6c6c6c',
            right: '5%',
            width: 38 + 'px',
            height: 40 + 'px',
            zIndex: 100,
            fontSize: 0.9 + 'em',
            fontWeight: 'normal'
        }
        let style_3 = {
            width: '100%',
            marginBottom: 3 + 'px',
            verticalAlign: 'middle',
            outline: 'none',
            height: 'auto'
        }

        return (
            <header style={style_1}>
                高校二手商城
                <Link to="/search" style={style_2}><img src={search} style={style_3} /></Link>
            </header>
        )
    }
}