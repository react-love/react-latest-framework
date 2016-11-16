/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

/*style*/
require('./styles/header.less')

export class Header extends Component {

    render() {
        const {title, imgUrl, linkTo} = this.props
        //提供3个接口参数给container做设置，可以不传参。
        let _title = title || false,
            _imgUrl = imgUrl || false,
            _linkTo = linkTo || false
        return (
            <header className='header'>
                {_title}
                <Link to={_linkTo} className="a_link" ><img src={_imgUrl} className="a_img" /></Link>
            </header>
        )
    }
}