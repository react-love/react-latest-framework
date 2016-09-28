/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

/*style*/
require('./styles/header.scss')

/*files*/
const search = require('./files/search.svg');

export class Header extends Component {

    render() {

        return (
            <header className='header'>
                高校二手商城
                <Link to="/search" className="a_link" ><img src={search} className="a_img" /></Link>
            </header>
        )
    }
}