// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowDots: true
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      if (!this.properties.list.thumbnail_pic_s02) {
        this.setData({
          isShowDots: false
        })
      }
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onGoToDetail(event) {
      const pid = event.currentTarget.dataset.id;
      this.triggerEvent("posttap", {
        pid
      })
    },
  }
})