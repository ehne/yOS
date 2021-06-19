import { register } from 'riot'
import { basename } from 'path'

const globalComponentsContext = require.context('./desktop_ui/global/', true, /[a-zA-Z0-9-]+\.riot/)

export default () => {
  globalComponentsContext.keys().map(path => {
    const name = basename(path, '.riot')
    const component = globalComponentsContext(path)
    console.log(component.default)
    register(name, component.default)

    return {
      name,
      component
    }
  })
}