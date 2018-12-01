import React from 'react'
import { Spin } from 'antd'
import './loading.less'

class Loading extends React.Component {
	render () {
		return (
			<div className="global-loading">
				<Spin size="large" />
			</div>
		)
	}
}
export default Loading