//直接定义一个可复用的
const behavior = Behavior({
  properties: {
    name:String,
    id:Number
  },
  data: {

  },
  methods: {
    onLoad() {
      console.log('直接使用数据:',this.data.id,this.data.name)
    }
  },
  lifetimes: {
    attached() {
      console.log('<view>我是behavior可复用的组件</view>')
    }
  },
  pageLifetimes: {
  }
})

export default behavior;