import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { formatFirstMenu, formatSecondMenu } from 'utils/tool'
import { Layout, Menu, Icon, Row, Col, Avatar } from 'antd'
import './index.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {setGlobalLoading, checkIsLogin} from 'actions/global'

const SubMenu = Menu.SubMenu
const { Header, Sider, Content } = Layout


@connect(
  state => state.getIn(['global']),
  dispatch => bindActionCreators({ setGlobalLoading, checkIsLogin }, dispatch)
)
class BaseLayout extends React.Component {
  state = {
    currentMenu: formatSecondMenu(this.props.location.pathname),
    menuData: {
      theme: 'dark', // 菜单主题色
      defaultSelectedKeys: this.props.location.pathname, // 当前默认值
      mode: 'inline', // 菜单模式
      defaultOpenKeys: formatFirstMenu(this.props.location.pathname),
      list: [
        {
            id: 'backtracking',
            icon: 'appstore',
            value: 'Backtracking',
            subtitle: [
              {
                value: 'Knight’s tour problem',
                link: '/admin/backtracking/knight'
              },
              {
                value: 'N Queens Problem',
                link: '/admin/backtracking/nqueens'
              }
            ]
        },
        {
            id: 'cryptography',
            icon: 'appstore',
            value: 'Cryptography',
            subtitle: [
              {
                value: 'Affine Cipher',
                link: '/admin/cryptography/affine'
              },
              {
                value: 'Caesar Cipher',
                link: '/admin/cryptography/caesar'
              }
            ]
        },
        {
            id: 'dynamic',
            icon: 'appstore',
            value: 'Dynamic Programming',
            subtitle: [
              {
                value: 'Catalan Number',
                link: '/admin/dynamic/catalan'
              },
              {
                value: 'Fibonacci Sequence',
                link: '/admin/dynamic/fibonacci'
              },
              {
                value: 'Integer Partition',
                link: '/admin/dynamic/integer'
              },
              {
                value: 'Knapsack Problem',
                link: '/admin/dynamic/knapsack'
              },
              {
                value: 'Longest Common Subsequence',
                link: '/admin/dynamic/common'
              },
              {
                value: 'Longest Increasing Subsequence',
                link: '/admin/dynamic/increasing'
              },
              {
                value: 'Longest Palindromic Subsequence',
                link: '/admin/dynamic/palindromic'
              },
              {
                value: 'Maximum Subarray',
                link: '/admin/dynamic/subarray'
              },
              {
                value: 'Maximum Sum Path',
                link: '/admin/dynamic/sumpath'
              },
              {
                value: `Pascal's Triangle`,
                link: '/admin/dynamic/triangle'
              },
              {
                value: 'Shortest Common Supersequence',
                link: '/admin/dynamic/shortest'
              },
              {
                value: 'Sliding Window',
                link: '/admin/dynamic/sliding'
              },
              {
                value: 'Ugly Numbers',
                link: '/admin/dynamic/ugly'
              }
            ]
        },
        {
            id: 'graph',
            icon: 'appstore',
            value: 'Graph Search',
            subtitle: [
              {
                value: 'Bellman-Ford',
                link: '/admin/graph/bellman'
              },
              {
                value: 'BFS',
                link: '/admin/graph/bfs'
              },
              {
                value: 'Find-Bridges',
                link: '/admin/graph/findbridges'
              },
              {
                value: 'DFS',
                link: '/admin/graph/dfs'
              },
              {
                value: 'Depth-Limited Search',
                link: '/admin/graph/depthlimited'
              },
              {
                value: 'Dijkstra',
                link: '/admin/graph/dijkstra'
              },
              {
                value: 'Floyd-Warshall',
                link: '/admin/graph/floyd'
              },
              {
                value: 'PageRank Algorithm',
                link: '/admin/graph/pageRank'
              },
              {
                value: 'Topological-Sort',
                link: '/admin/graph/topological'
              },
              {
                value: 'Tarjan',
                link: '/admin/graph/tarjan'
              }
            ]
        },
        {
            id: 'greedy',
            icon: 'appstore',
            value: 'Greedy',
            subtitle: [
              {
                value: 'Job Scheduling Problem',
                link: '/admin/greedy/scheduling'
              },
              {
                value: 'Majority Element(Boyer–Moore majority vote algorithm)',
                link: '/admin/greedy/majority'
              }
            ]
        },
        {
            id: 'minimum',
            icon: 'appstore',
            value: 'Minimum Spanning Tree',
            subtitle: [
              {
                value: `Kruskal's Algorithm`,
                link: '/admin/minimum/kruskal'
              },
              {
                value: `Prim's Algorithm`,
                link: '/admin/minimum/prim'
              }
            ]
        },
        {
            id: 'number',
            icon: 'appstore',
            value: 'Number Theory',
            subtitle: [
              {
                value: 'Euclidean Algorithm',
                link: '/admin/number/euclidean'
              },
              {
                value: 'Sieve of Eratosthenes',
                link: '/admin/number/eratosthenes'
              },
              {
                value: 'Freivalds Algorithm',
                link: '/admin/number/freivalds'
              },
              {
                value: 'Miller-Rabin primality test',
                link: '/admin/number/millerrabin'
              }
            ]
        },
        {
            id: 'search',
            icon: 'appstore',
            value: 'Search',
            subtitle: [
              {
                value: 'Binary Search',
                link: '/admin/search/binary'
              }
            ]
        }, {
            id: 'sorting',
            icon: 'appstore',
            value: 'Sorting',
            subtitle: [
              {
                value: 'Bucket Sort',
                link: '/admin/sorting/bucket'
              },
              {
                value: 'Bubble Sort',
                link: '/admin/sorting/bubble'
              },
              {
                value: 'Comb Sort',
                link: '/admin/sorting/comb'
              },
              {
                value: 'Counting Sort',
                link: '/admin/sorting/cunting'
              },
              {
                value: 'Cycle Sort',
                link: '/admin/sorting/cycle'
              },
              {
                value: 'Heapsort',
                link: '/admin/sorting/heapsort'
              },
              {
                value: 'Insertion Sort',
                link: '/admin/sorting/insertion'
              },
              {
                value: 'Merge Sort',
                link: '/admin/sorting/merge'
              },
              {
                value: 'Pigeonhole Sort',
                link: '/admin/sorting/pigeonhole'
              },
              {
                value: 'Quicksort',
                link: '/admin/sorting/quicksort'
              },
              {
                value: 'Radix Sort',
                link: '/admin/sorting/radix'
              },
              {
                value: 'Selection Sort',
                link: '/admin/sorting/selection'
              },
              {
                value: 'Shellsort',
                link: '/admin/sorting/shellsort'
              },
              {
                value: 'Pancake Sort',
                link: '/admin/sorting/pancake'
              }
            ]
        },
        {
          id: 'string',
          icon: 'appstore',
          value: 'String',
          subtitle: [
            {
              value: 'Edit Distance',
              link: '/admin/string/editdistance'
            },
            {
              value: 'KMP Substring Search',
              link: '/admin/string/kmp'
            },
            {
              value: 'Rabin-Karp Algorithm',
              link: '/admin/string/rabinkarp'
            },
            {
              value: 'Suffix Array (construction & usage)',
              link: '/admin/string/suffix'
            },
            {
              value: 'Z Algorithm',
              link: '/admin/string/zalgorithm'
            }
          ]
        },
        {
          id: 'tree',
          icon: 'appstore',
          value: 'Tree',
          subtitle: [
            {
              value: 'Binary Search Tree',
              link: '/admin/tree/searchtree'
            },
            {
              value: 'Binary Tree Traversal',
              link: '/admin/tree/treetraversal'
            },
            {
              value: 'Lowest Common Ancestor',
              link: '/admin/tree/lowest'
            }
          ]
        },
        {
          id: 'uncategorized',
          icon: 'appstore',
          value: 'Uncategorized',
          subtitle: [
            {
              value: 'Flood Fill',
              link: '/admin/uncategorized/floodfill'
            },
            {
              value: 'Cellular Automata',
              link: '/admin/uncategorized/cellular'
            },
            {
              value: 'Create Maze',
              link: '/admin/uncategorized/createmaze'
            },
            {
              value: 'Magic Square',
              link: '/admin/uncategorized/magicsquare'
            },
            {
              value: 'Stable Matching',
              link: '/admin/uncategorized/stablematching'
            }
          ]
        }
      ] // 用户
    }
  }
  getCurrentMenu = (item) => {
    this.setCurrentMenu(item.key)
  }
  setCurrentMenu = (item) => {
    this.setState(() => ({
      currentMenu: formatSecondMenu(item)
    }))
  }
  redirectRoute = () => {
    const { isLogin, location, history } = this.props
    if (isLogin) {
      history.push(location.pathname)
    } else {
      history.push('/login')
    }
  }
  onLogout = () => {
    this.props.checkIsLogin(false)
  }
  componentDidMount () {
    this.redirectRoute()
    this.props.setGlobalLoading(true)
  }
  render () {
    const { routes = [] } = this.props
    const { menuData, currentMenu } = this.state
    const list = menuData.list
    return (
      <Layout className="base-layout">
        <Sider>
          <Menu
            theme={menuData.theme}
            mode={menuData.mode}
            defaultOpenKeys={[menuData.defaultOpenKeys]}
            defaultSelectedKeys={[menuData.defaultSelectedKeys] }
          >
          {
              list.map((item) => {
                return (
                  <SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.value}</span></span>}>
                  {
                    item.subtitle.map(second => {
                      return (
                        <Menu.Item
                          key={second.link}
                          onClick={this.getCurrentMenu}
                          >
                          <NavLink to={second.link}>
                            {second.value}
                          </NavLink>
                        </Menu.Item>
                      )
                    })
                  }
                  </SubMenu>
                )
              })
          }
          </Menu>
        </Sider>
        <Layout>
          <Row gutter={ 12 }>
            <Col span={ 24 }>
      
              <Layout>
                <Header className="base-header">
                  <span className="header-tag">{currentMenu && `算法 /`} {currentMenu}</span>
                  <NavLink to="/login" onClick={this.onLogout}><Avatar size="large" icon="user" /></NavLink>
                </Header>
                <Content className="base-content">
                  {
                    routes.map((r, key) => {
                      return (
                        <Route
                          component={r.component}
                          exact={!!r.exact}
                          key={r.path + key}
                          path={r.path}
                        />
                      )
                    })
                  }
                </Content>
              </Layout>
            </Col>
  
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout