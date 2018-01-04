/**
 * Created by yongyuehuang on 2017/8/27.
 */
'use strict';
/*
* 如果你在移动端项目尝试过IScroll5，就会发现他的卡顿问题很难完美解决，于是我就在react中封装了下面这个性能更好的组件。
* 该组件的作用和臭名昭著的IScroll插件相同，但是这个组件比IScroll封装的更好用，我已经在移动端项目全部页面使用了该组件。
* 组件使用教程可以查看我写的一篇博客：https://segmentfault.com/a/1190000010042474
* */
import React from 'react'
import JRoll from 'jroll'
export default class MyJRoll extends React.Component {
    constructor(props) {
        super(props)
        this.jroll = null
    }
    componentDidMount() {
        let wrappers = this.props.ID || 'wrappers'
        this.jroll = new JRoll(`#${wrappers}`)
        this.jroll.refresh()
        this.jroll.on('scrollEnd', () => {
            this.jroll.refresh()
        })
    }
    componentDidUpdate() {
        setTimeout(() =>  {
            if (!!this.jroll) {
                this.jroll.refresh()
            }
        }, 400)
    }
    componentWillUnmount() {
        this.jroll.destroy()
    }
    render() {
        const { height, maxHeight, bgColor } = this.props
        let _style
        if (!maxHeight) {
            _style = {height: height ? height : '100%', background: bgColor ? bgColor : '#f6f6f6'}
        } else {
            _style = {maxHeight: maxHeight, background: bgColor ? bgColor : '#f6f6f6'}
        }
        return (
            <div
                id={this.props.ID ? this.props.ID : 'wrappers'}
                style={_style}
            >
                <ul
                    className="clearfix"
                    id="scroller"
                >
                    {this.props.children}
                </ul>
            </div>
        )
    }
}