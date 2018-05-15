import Loadable from "react-loadable"
import home from './home'
import search from './search'

let config = [
    ...(home(Loadable)),
    ...(search(Loadable))
]

export default config