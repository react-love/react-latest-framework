/**
 * Created by yongyuehuang on 2017/8/27.
 */
'use strict';
/*
* 该插件作用是设置文档的标题，这样你就不再需要使用react-document-title插件了。
*
* 使用方法非常简单
*
* import SetDocumentTitle from 'path/SetDocumentTitle'
     render() {
         return (
             <SetDocumentTitle title="文档标题">
                //这里仅能有一个唯一的root元素。
             </SetDocumentTitle>
         )
     }
*
* */
import React from 'react'
import PropTypes from 'prop-types'
export default class SetDocumentTitle extends React.PureComponent {
    componentDidMount() {
        this.setTitle()
    }
    componentDidUpdate() {
        this.setTitle()
    }
    setTitle() {
        const { title } = this.props
        document.title = title
    }
    render() {
        return React.Children.only(this.props.children)
    }
}
SetDocumentTitle.propTypes = {
    title: PropTypes.string
}