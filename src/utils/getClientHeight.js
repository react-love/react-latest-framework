const getClientHeight = () => {
  let winHeight
  if (window.innerHeight) {
    winHeight = window.innerHeight
  } else if (document.body && document.body.clientHeight) {
    winHeight = document.body.clientHeight
  } else if (
    document.documentElement &&
    document.documentElement.clientHeight &&
    document.documentElement.clientWidth
  ) {
    winHeight = document.documentElement.clientHeight
  }
  return winHeight
}
export default getClientHeight()
