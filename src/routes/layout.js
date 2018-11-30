import React from 'react'
import Loadable from "react-loadable"
import Layout from 'components/BaseLayout'

// default
const defaultLoad = () => <div/>
// backtracking
const Knight = () => import('pages/backtracking/Knight/Knight')
const Nqueens = () => import('pages/backtracking/Nqueens/Nqueens')
// cryptography
const Affine = () => import('pages/cryptography/Affine/Affine')
const Caesar = () => import('pages/cryptography/Caesar/Caesar')
// dynamic
const Catalan = () => import('pages/dynamic/Catalan/Catalan')
const Fibonacci = () => import('pages/dynamic/Fibonacci/Fibonacci')
const Integer = () => import('pages/dynamic/Integer/Integer')
const Knapsack = () => import('pages/dynamic/Knapsack/Knapsack')
const Common = () => import('pages/dynamic/Common/Common')
const Increasing = () => import('pages/dynamic/Increasing/Increasing')
const Palindromic = () => import('pages/dynamic/Palindromic/Palindromic')
const Subarray = () => import('pages/dynamic/Subarray/Subarray')
const Sumpath = () => import('pages/dynamic/Sumpath/Sumpath')
const Triangle = () => import('pages/dynamic/Triangle/Triangle')
const Shortest = () => import('pages/dynamic/Shortest/Shortest')
const Sliding = () => import('pages/dynamic/Sliding/Sliding')
const Ugly = () => import('pages/dynamic/Ugly/Ugly')
// graph
const Bellman = () => import('pages/graph/Bellman/Bellman')
const Bfs = () => import('pages/graph/Bfs/Bfs')
const Findbridges = () => import('pages/graph/Findbridges/Findbridges')
const Dfs = () => import('pages/graph/Dfs/Dfs')
const Depthlimited = () => import('pages/graph/Depthlimited/Depthlimited')
const Dijkstra = () => import('pages/graph/Dijkstra/Dijkstra')
const Floyd = () => import('pages/graph/Floyd/Floyd')
const PageRank = () => import('pages/graph/PageRank/PageRank')
const Topological = () => import('pages/graph/Topological/Topological')
const Tarjan = () => import('pages/graph/Tarjan/Tarjan')
// greedy
const Scheduling = () => import('pages/greedy/Scheduling/Scheduling')
const Majority = () => import('pages/greedy/Majority/Majority')
// minimum
const Kruskal = () => import('pages/minimum/Kruskal/Kruskal')
const Prim = () => import('pages/minimum/Prim/Prim')
// number
const Euclidean = () => import('pages/number/Euclidean/Euclidean')
const Eratosthenes = () => import('pages/number/Eratosthenes/Eratosthenes')
const Freivalds = () => import('pages/number/Freivalds/Freivalds')
const Millerrabin = () => import('pages/number/Millerrabin/Millerrabin')
// search
const Binary = () => import('pages/search/Binary/Binary')
// sorting
const Bucket = () => import('pages/sorting/Bucket/Bucket')
const Bubble = () => import('pages/sorting/Bubble/Bubble')
const Comb = () => import('pages/sorting/Comb/Comb')
const Cunting = () => import('pages/sorting/Cunting/Cunting')
const Cycle = () => import('pages/sorting/Cycle/Cycle')
const Heapsort = () => import('pages/sorting/Heapsort/Heapsort')
const Merge = () => import('pages/sorting/Merge/Merge')
const Insertion = () => import('pages/sorting/Insertion/Insertion')
const Pigeonhole = () => import('pages/sorting/Pigeonhole/Pigeonhole')
const Quicksort = () => import('pages/sorting/Quicksort/Quicksort')
const Selection = () => import('pages/sorting/Selection/Selection')
const Radix = () => import('pages/sorting/Radix/Radix')
const Shellsort = () => import('pages/sorting/Shellsort/Shellsort')
const Pancake = () => import ('pages/sorting/Pancake/Pancake')
// string
const Editdistance = () => import('pages/string/Editdistance/Editdistance')
const Kmp = () => import('pages/string/Kmp/Kmp')
const Rabinkarp = () => import('pages/string/Rabinkarp/Rabinkarp')
const Suffix = () => import('pages/string/Suffix/Suffix')
const Zalgorithm = () => import('pages/string/Zalgorithm/Zalgorithm')
// tree
const Searchtree = () => import('pages/tree/Searchtree/Searchtree')
const Treetraversal = () => import('pages/tree/Treetraversal/Treetraversal')
const Lowest = () => import('pages/tree/Lowest/Lowest')
// uncategorized
const Floodfill = () => import('pages/uncategorized/Floodfill/Floodfill')
const Cellular = () => import('pages/uncategorized/Cellular/Cellular')
const Createmaze = () => import('pages/uncategorized/Createmaze/Createmaze')
const Magicsquare = () => import('pages/uncategorized/Magicsquare/Magicsquare')
const Stablematching = () => import('pages/uncategorized/Stablematching/Stablematching')

let layout = {
		path: '/admin',
		component: Layout,
		routes: [
			// backtracking
			{
				path: '/admin/backtracking/knight',
				component: Loadable({
					loader: Knight,
					loading: defaultLoad
				}),
			},
			{
				path: '/admin/backtracking/nqueens',
				component: Loadable({
					loader: Nqueens,
					loading: defaultLoad
				})
			},
			// cryptography
			{
				path: '/admin/cryptography/affine',
				component: Loadable({
					loader: Affine,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/cryptography/caesar',
				component: Loadable({
					loader: Caesar,
					loading: defaultLoad
				})
			},
			// dynamic
			{
				path: '/admin/dynamic/catalan',
				component: Loadable({
					loader: Catalan,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/fibonacci',
				component: Loadable({
					loader: Fibonacci,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/integer',
				component: Loadable({
					loader: Integer,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/knapsack',
				component: Loadable({
					loader: Knapsack,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/common',
				component: Loadable({
					loader: Common,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/increasing',
				component: Loadable({
					loader: Increasing,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/palindromic',
				component: Loadable({
					loader: Palindromic,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/subarray',
				component: Loadable({
					loader: Subarray,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/sumpath',
				component: Loadable({
					loader: Sumpath,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/triangle',
				component: Loadable({
					loader: Triangle,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/shortest',
				component: Loadable({
					loader: Shortest,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/sliding',
				component: Loadable({
					loader: Sliding,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/dynamic/ugly',
				component: Loadable({
					loader: Ugly,
					loading: defaultLoad
				})
			},
			// graph
			{
				path: '/admin/graph/bellman',
				component: Loadable({
					loader: Bellman,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/bfs',
				component: Loadable({
					loader: Bfs,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/findbridges',
				component: Loadable({
					loader: Findbridges,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/dfs',
				component: Loadable({
					loader: Dfs,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/depthlimited',
				component: Loadable({
					loader: Depthlimited,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/dijkstra',
				component: Loadable({
					loader: Dijkstra,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/floyd',
				component: Loadable({
					loader: Floyd,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/pageRank',
				component: Loadable({
					loader: PageRank,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/topological',
				component: Loadable({
					loader: Topological,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/graph/tarjan',
				component: Loadable({
					loader: Tarjan,
					loading: defaultLoad
				})
			},
			// greedy
			{
				path: '/admin/greedy/scheduling',
				component: Loadable({
					loader: Scheduling,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/greedy/majority',
				component: Loadable({
					loader: Majority,
					loading: defaultLoad
				})
			},
			// minimum
			{
				path: '/admin/minimum/kruskal',
				component: Loadable({
					loader: Kruskal,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/minimum/prim',
				component: Loadable({
					loader: Prim,
					loading: defaultLoad
				})
			},
			// number
			{
				path: '/admin/number/euclidean',
				component: Loadable({
					loader: Euclidean,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/number/eratosthenes',
				component: Loadable({
					loader: Eratosthenes,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/number/freivalds',
				component: Loadable({
					loader: Freivalds,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/number/millerrabin',
				component: Loadable({
					loader: Millerrabin,
					loading: defaultLoad
				})
			},
			// search
			{
				path: '/admin/search/binary',
				component: Loadable({
					loader: Binary,
					loading: defaultLoad
				})
			},
			// sorting
			{
				path: '/admin/sorting/bucket',
				component: Loadable({
					loader: Bucket,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/bubble',
				component: Loadable({
					loader: Bubble,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/comb',
				component: Loadable({
					loader: Comb,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/cunting',
				component: Loadable({
					loader: Cunting,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/cycle',
				component: Loadable({
					loader: Cycle,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/heapsort',
				component: Loadable({
					loader: Heapsort,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/insertion',
				component: Loadable({
					loader: Insertion,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/merge',
				component: Loadable({
					loader: Merge,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/pigeonhole',
				component: Loadable({
					loader: Pigeonhole,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/quicksort',
				component: Loadable({
					loader: Quicksort,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/radix',
				component: Loadable({
					loader: Radix,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/selection',
				component: Loadable({
					loader: Selection,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/shellsort',
				component: Loadable({
					loader: Shellsort,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/sorting/pancake',
				component: Loadable({
					loader: Pancake,
					loading: defaultLoad
				})
			},
			// string
			{
				path: '/admin/string/editdistance',
				component: Loadable({
					loader: Editdistance,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/string/kmp',
				component: Loadable({
					loader: Kmp,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/string/rabinkarp',
				component: Loadable({
					loader: Rabinkarp,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/string/suffix',
				component: Loadable({
					loader: Suffix,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/string/zalgorithm',
				component: Loadable({
					loader: Zalgorithm,
					loading: defaultLoad
				})
			},
			// tree
			{
				path: '/admin/tree/searchtree',
				component: Loadable({
					loader: Searchtree,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/tree/treetraversal',
				component: Loadable({
					loader: Treetraversal,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/tree/lowest',
				component: Loadable({
					loader: Lowest,
					loading: defaultLoad
				})
			},
			// uncategorized
			{
				path: '/admin/uncategorized/floodfill',
				component: Loadable({
					loader: Floodfill,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/uncategorized/cellular',
				component: Loadable({
					loader: Cellular,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/uncategorized/createmaze',
				component: Loadable({
					loader: Createmaze,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/uncategorized/magicsquare',
				component: Loadable({
					loader: Magicsquare,
					loading: defaultLoad
				})
			},
			{
				path: '/admin/uncategorized/stablematching',
				component: Loadable({
					loader: Stablematching,
					loading: defaultLoad
				})
			}
		]
	}

export default layout