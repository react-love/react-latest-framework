import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'utils/isEmpty'
import styles from './styles/bookList.less'
import commonStyles from '../../../app.less'

const BookList = props => {
  const {
    _id,
    title,
    author,
    press,
    publishedDate,
    currentPrice,
    originalPrice,
    index
  } = props
  return (
    <div
        className={styles.home_book_list}
        data-id={_id}
    >
      <div className={styles.book_img}>
        <span className={styles.book_index}>{index}</span>
        <img className=""
            src=""
             alt=""
        />
      </div>
      <div className={styles.book_contain}>
        <p
            className={`${styles.book_title} ${commonStyles.textOverflow_hidden}`}
        >
          {title}
        </p>
        <p
            className={`${styles.book_author} ${
            commonStyles.textOverflow_hidden
          }`}
        >
          The author：{author}
        </p>
        <p
            className={`${styles.book_author} ${
            commonStyles.textOverflow_hidden
          }`}
        >
          Press.：{press}
        </p>
        {!isEmpty(publishedDate) && (
          <p
              className={`${styles.book_author} ${
              commonStyles.textOverflow_hidden
            }`}
          >
            Publication date：{publishedDate}
          </p>
        )}
        <p className={commonStyles.textOverflow_hidden}>
          <span className={styles.now_price}>￥{currentPrice}</span>
          <del className={styles.old_price}>￥{originalPrice}</del>
        </p>
      </div>
    </div>
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
