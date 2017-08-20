import { createApp } from './app'
import Q from 'q';
const { app, router, store } = createApp()
console.log(router)
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
      const matched = router.getMatchedComponents(to)
      const prevMatched = router.getMatchedComponents(from)
      // 我们只关心之前没有渲染的组件
      // 所以我们对比它们，找出两个匹配列表的差异组件
      let diffed = false
      const activated = matched.filter((c, i) => {
        return diffed || (diffed = (prevMatched[i] !== c))
      })
      if (!activated.length) {
        return next()
      }
      // 这里如果有加载指示器(loading indicator)，就触发
      Q.all(activated.map(c => {
        if (c.asyncData) {
          return c.asyncData({ store, route: to })
        }
      })).then(() => {
        // 停止加载指示器(loading indicator)
        next()
      }).catch(next)
    })
    app.$mount('#app')
})
// 将服务端渲染时候的状态写入vuex中
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
