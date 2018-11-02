import React from 'react'
import { List, message, Avatar, Spin, Input } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import './index.less'

const Search = Input.Search

class UserList extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true
  }
  getData = (callback) => {}
  componentDidMount () {
    this.getData((res) => {
      this.setState({
        data: res.results
      })
    })
  }
  handleInfiniteOnLoad = () => {
    let data = this.state.data
    this.setState({
      loading: true
    })
    if (data.length > 14) {
      message.warning('Infinite List loaded all')
      this.setState({
        hasMore: false,
        loading: false
      })
      return
    }
    this.getData((res) => {
      data = data.concat(res.results)
      this.setState({
        data,
        loading: false
      })
    })
  }
  render () {
    return (
      <div className="user-list">
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={ false }
            pageStart={ 0 }
            loadMore={ this.handleInfiniteOnLoad }
            hasMore={ !this.state.loading && this.state.hasMore }
            useWindow={ false }
          >
            <List
              dataSource={ this.state.data }
              renderItem={ item => (
                <List.Item key={ item.id }>
                  <List.Item.Meta
                    avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> }
                    title={ <a href="https://ant.design">{ item.name.last }</a> }
                    description={ item.email }
                  />
                  <div>Content</div>
                </List.Item>
              ) }
            >
              { this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin/>
                </div>
              ) }
            </List>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}
export default UserList