import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//使用该组件的方法
//<CreatePortal
//  id,
//  className,
//  style
// >
//    此处插入div或者react组件
//</CreatePortal>

function createPortal() {
    class Portal extends React.Component{
        constructor(props) {
            super(props)
            this.el = document.createElement('div')
            if (!!props) {
                this.el.id = props.id || false
                if (props.className) this.el.className = props.className
                if (props.style) {
                    Object.keys(props.style).map((v) => {
                        this.el.style[v] = props.style[v]
                    })
                }
                document.body.appendChild(this.el)
            }
        }
        componentDidMount() {
            document.body.appendChild(this.el);
        }
        componentWillUnmount() {
            document.body.removeChild(this.el)
        }
        render() {
            return ReactDOM.createPortal(
                this.props.children,
                this.el
            )
        }
    }
    Portal.propTypes = {
        style: PropTypes.object
    }
    return Portal
}
export default createPortal()