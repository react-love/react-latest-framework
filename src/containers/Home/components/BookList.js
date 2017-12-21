/**
 * Created by yongyuehuang on 2016/12/15.
 */
import React from 'react'
import Link from 'react-router-dom/Link'
import PropTypes from 'prop-types'

const BookList = (props) => {
    const {_id, title, author, press, publishedDate, currentPrice, originalPrice, index} = props
    return (
        <Link
            className="home-book-list"
            data-id={_id}
            to={`/bookList/${_id}`}
        >
            <div className="book-img">
                <span className="book-index">{index}</span>
                <img
                    alt="图片"
                    className=""
                    src=""
                />
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
BookList.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    press: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    currentPrice: PropTypes.string.isRequired,
    originalPrice: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired //书籍序号
}
export default BookList