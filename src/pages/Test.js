import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from 'antd'

class Test extends React.Component {
	render() {
		return (
			<div>
				测试页面
				<NavLink to="/admin/home">
					<Button type="primary">返回首页</Button>
				</NavLink>
			</div>
		)
	}
}
export default Test
