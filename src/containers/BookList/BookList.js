/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'
import withSetTitle from '../Commons/withSetTitle'
class BookList extends React.Component {
    render() {
        return(
            <div className="">
                bookList
            </div>
        )
    }
}

BookList.propTypes = {
    match: PropTypes.object
}
export default withSetTitle(BookList, '书籍详情')