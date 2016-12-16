/**
 * Created by yongyuehuang on 2016/12/15.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export class BookList extends Component {

    render() {
        const {_id, imgUrl, title, author, press, publishedDate, currentPrice, originalPrice, index} = this.props

        return (
            <Link to={`/bookList/${_id}`} data-id={_id} className="home-book-list">
                <div className="book-img">
                    <span className="book-index">{index}</span>
                    <img className="" src={imgUrl} />
                </div>
                <div className="book-contain">
                    <p className="book-title textOverflow-hidden">{title}</p>
                    <p className="book-author textOverflow-hidden">作者：{author}</p>
                    <p className="book-author textOverflow-hidden">出版社：{press}</p>
                    {
                        publishedDate !== '' ?  <p className="book-author textOverflow-hidden">出版时间：{publishedDate}</p> : ''
                    }
                    <p className="textOverflow-hidden">
                        <span className="now-price">￥{currentPrice}</span>
                        <span className="old-price">￥{originalPrice}</span>
                    </p>
                </div>
            </Link>
        )
    }

    //数据验证
    static propTypes = {
        _id: React.PropTypes.string.isRequired,
        imgUrl: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        press: React.PropTypes.string.isRequired,
        publishedDate: React.PropTypes.string.isRequired,
        currentPrice: React.PropTypes.string.isRequired,
        originalPrice: React.PropTypes.string.isRequired,
        index: React.PropTypes.number.isRequired //书籍序号
    }
}