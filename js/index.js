// console.log(Vue)
const ref = Vue.ref; // reference

function innerText() {
  const len = sentenceArray.length
  let index = Math.abs(Math.floor(Math.random() * (len - 0)) + 0)
  // setTimeout(() => {
  //   innerText(sentence)
  // }, 1000 * 30)
  return sentenceArray[index] || '时间象奔腾澎湃的急湍，它一去无返，毫不流连。'
}
const App = {
  data() {
    return {
      message: 'Hello Vue3!!'
    }
  },
  computed: {
    // len() {
    //   return sentenceArray.length
    // }
  },
  // 新的 setup 组件选项在创建组件之前执行(可以理解在beforeCreated前创建)
  setup(props, context) {
    let sentenceTxt = ref(''); // {value: ''}
    sentenceTxt.value = innerText()
    // 在执行 setup 时，组件实例尚未被创建。在 setup 选项中 this 指向window了（不指向实例，可以说没有this），也就不能访问data状态、方法、计算属性
    console.log(sentenceTxt)
    return {
      sentenceTxt
    }
  }
}
Vue.createApp(App).mount('#app')