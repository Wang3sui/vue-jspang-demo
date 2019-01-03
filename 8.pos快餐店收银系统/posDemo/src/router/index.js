import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    }
  ]
})
