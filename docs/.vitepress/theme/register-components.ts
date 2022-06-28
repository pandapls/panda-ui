import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export function registerComponents(app:any) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}