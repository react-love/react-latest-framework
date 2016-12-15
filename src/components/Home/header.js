/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export class Header extends Component {
    //注意，组件内部也可能有时候会暴露事件给外部调用，和参数传递的原理一样
    render() {
        const {title, imgUrl, linkTo, bgColor} = this.props
        //提供4个接口参数给container做设置，可以不传参。
        return (
            <header className='header' style={bgColor}>
                {title}
                <Link to={linkTo} className="a_link" >
                    <img src={imgUrl} className="a_img" />
                </Link>
            </header>
        )
    }
    //严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
    static propTypes = {
        title: React.PropTypes.string.isRequired
    }
}