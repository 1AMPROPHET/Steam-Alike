import Vue from 'vue'
import Vuex from 'vuex'
import Message from '@/assets/img/common/message.png'
import Storage from '@/assets/img/common/storage.png'
import Invitation from '@/assets/img/common/invitation.png'
import Gift from '@/assets/img/common/gift.png'
import Unread from '@/assets/img/common/unread.png'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '丶PR0PHET',
    acount: 934830995,
    notifications: [
      {
        count: 0,
        title: '条新留言',
        icon: Message
      },
      {
        count: 3,
        title: '件库存中的新品',
        icon: Storage
      },
      {
        count: 0,
        title: '份新邀请',
        icon: Invitation
      },
      {
        count: 0,
        title: '份新礼物',
        icon: Gift
      },
      {
        count: 0,
        title: '条未读聊天信息',
        icon: Unread
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
