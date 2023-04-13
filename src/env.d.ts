// 解決 vscode 會出現找不到  App.vue 模組問題
declare module '*.vue' {	
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
