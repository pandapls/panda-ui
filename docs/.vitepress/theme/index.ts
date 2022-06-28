import Theme from 'vitepress/theme'
import Button from '../../../src/button/src/button';
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
export default {
    ...Theme,
    enhanceApp({ app } : any) {
        app.component('Button', Button)
        app.component('HelloWorld', HelloWorld)
        app.component('Test', Test)
        registerComponents(app)


    }
}