import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/login/login'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/retrieve',
      name: 'retrieve',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/retrieve/retrieve'),
      meta: {
        requiresAuth: false
      }
    },
    // 公告详情
    {
      path: '/gdetails/:name',
      name: 'gdetails',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/gdetails/gdetails'),
      meta: {
        requiresAuth: false
      }
    },
    // announcement
    {
      path: '/announcement',
      name: 'announcement',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/announcement/announcement'),
      meta: {
        requiresAuth: false
      }
    },
    // 游戏规则
    {
      path: '/guize',
      name: 'guize',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/guize/guize'),
      meta: {
        requiresAuth: false
      }
    },
    // 红包扫雷游戏规则
    {
      path: '/rules',
      name: 'rules',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/rules/rules'),
      meta: {
        requiresAuth: false
      }
    },
    // 红包接龙游戏规则
    {
      path: '/rulesone',
      name: 'rulesone',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/rulesone/rulesone'),
      meta: {
        requiresAuth: false
      }
    },
    // clearance  扫雷
    {
      path: '/clearance',
      name: 'clearance',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/clearance/clearance'),
      meta: {
        requiresAuth: false
      }
    },
    // 红包接龙  solitaire
    {
      path: '/solitaire',
      name: 'solitaire',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/solitaire/solitaire'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/clearance',
      name: 'clearance',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/clearance/clearance'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/index/index'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/task',
      name: 'task',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/task/task'),
      meta: {
        requiresAuth: false
      },
      children: [
        { path: '', redirect: 'commission' },
        {
          path: 'commission',
          name: 'commission',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/task/childer/commission'),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'profit',
          name: 'profit',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/task/childer/profit'),
          meta: {
            requiresAuth: false
          }
        },
      ]
    },
    {
      path: '/personal',
      name: 'personal',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/personal/personal'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/myhone',
      name: 'myhone',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/myhome/myhone'),
      meta: {
        requiresAuth: false
      }
    },
    // 修改个人资料
    {
      path: '/gaidata',
      name: 'gaidata',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/data/gaidata'),
      meta: {
        requiresAuth: false
      }
    },
    // 玩家福利
    {
      path: '/welfare',
      name: 'welfare',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/welfare/welfare'),
      meta: {
        requiresAuth: false
      },
      children: [
        { path: '', redirect: 'envelope' },
        {
          path: 'envelope',
          name: 'envelope',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/welfare/childer/envelope.vue'),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'nvelope',
          name: 'nvelope',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/welfare/childer/nvelope.vue'),
          meta: {
            requiresAuth: false
          }
        },
      ]
    },
    // xiugaiali
    {
      path: '/xiugaiali/:id',
      name: 'xiugaiali',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/zhifubao/xiugaiali.vue'),
      meta: {
        requiresAuth: false
      }
    },
    // Transferrecord
    {
      path: '/Transferrecord',
      name: 'Transferrecord',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/Transferrecord/Transferrecord.vue'),
      meta: {
        requiresAuth: false
      }
    },
    // 红包扫雷  Mineclearance
    {
      path: '/Mineclearance',
      name: 'Mineclearance',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/Mineclearance/Mineclearance.vue'),
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/zhifupassworld',
      name: 'zhifupassworld',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/zhifupassworld/zhifupassworld.vue'),
      meta: {
        requiresAuth: false
      }
    },
    // 人工充值
    {
      path: '/rengong',
      name: 'rengong',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/rengong/rengong.vue'),
      meta: {
        requiresAuth: false
      }
    },
    // 代理商
    {
      path: '/agent',
      name: 'agent',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/agent/agent'),
      meta: {
        requiresAuth: false
      }
    },
    // set
    {
      path: '/Set',
      name: 'Set',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/Set/Set.vue'),
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/gaipassword',
      name: 'gaipassword',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/gaipassword/gaipassword.vue'),
      meta: {
        requiresAuth: false
      }
    },

    // 个人资料
    {
      path: '/data',
      name: 'data',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/data/data'),
      meta: {
        requiresAuth: false
      }
    },
    // 提现  withdrawal
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/withdrawal/withdrawal'),
      meta: {
        requiresAuth: false
      }
    },
    // 推荐
    {
      path: '/cardy',
      name: 'cardy',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/card/card'),
      meta: {
        requiresAuth: false
      }
    },
    // advertising
    {
      path: '/advertising',
      name: 'advertising',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/advertising/advertising'),
      meta: {
        requiresAuth: false
      }
    },
    // 添加银行卡
    {
      path: '/add',
      name: 'add',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/advertising/add'),
      meta: {
        requiresAuth: false
      }
    },
    // zhifubao
    {
      path: '/zhifubao',
      name: 'zhifubao',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/zhifubao/zhifubao'),
      meta: {
        requiresAuth: false
      }
    },
    // 添加支付宝
    {
      path: '/addzhifubao',
      name: 'addzhifubao',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/zhifubao/addzhifu.vue'),
      meta: {
        requiresAuth: false
      }
    },
    // 修改
    {
      path: '/xiugai/:id',
      name: 'xiugai',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/advertising/xiugai'),
      meta: {
        requiresAuth: false
      }
    },
    // 签到
    {
      path: '/Sign',
      name: 'Sign',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/Sign/Sign'),
      meta: {
        requiresAuth: false
      }
    },
    // 充值
    {
      path: '/topup',
      name: 'topup',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/topup/topup'),
      meta: {
        requiresAuth: false
      }
    },
    // record
    {
      path: '/record',
      name: 'record',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/record/record'),
      meta: {
        requiresAuth: false
      },
      children: [
        { path: '', redirect: 'chongzhi' },
        {
          path: 'chongzhi',
          name: 'chongzhi',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/record/childer/chongzhi.vue'),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'zhifu',
          name: 'zhifu',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/record/childer/zhifu'),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'zhuangzhang',
          name: 'zhuangzhang',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/record/childer/zhuangzhang'),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: 'tixian',
          name: 'tixian',
          component: () =>
            import(/* webpackChunkName: "register" */ './components/record/childer/tixian'),
          meta: {
            requiresAuth: false
          }
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!getToken()) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    console.log(to.matched)
    next()
  }
})

export default router
