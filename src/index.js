import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './desktop_ui/yOS_home.riot'
import registerGlobals from './register-global-components.js';

registerGlobals()

// mount the root tag
component(App)(document.getElementById('root'))