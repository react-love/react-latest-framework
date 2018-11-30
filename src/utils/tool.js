// 英文首字母大写
const firstToUpperCase = (str) => str.replace(/\b(\w)(\w+)/g, (x, y, z) => y.toUpperCase() + z)

// 处理layout组件匹配出来的菜单地址
const formatFirstMenu = (str) => {
if (/^\/\w+\/\w+\/\w+$/.test(str)) {
		return str.match(/^\/\w+\/(\w+)\/\w+$/i)[1]
	}
}
// 处理layout组件匹配出来的二级菜单地址
const formatSecondMenu = (str) => {
	if (/^\/\w+\/\w+\/\w+$/.test(str)) {
		return str.match(/^\/\w+\/\w+\/(\w+)$/i)[1]
	}
}

export {
	firstToUpperCase,
	formatFirstMenu,
	formatSecondMenu
} 