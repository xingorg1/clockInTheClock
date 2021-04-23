// console.log(Vue)
const { ref, onMounted, watch, computed } = Vue; // reference
function innerText() {
  const len = sentenceArray.length
  let index = Math.abs(Math.floor(Math.random() * (len - 0)) + 0)
  return sentenceArray[index] || '时间象奔腾澎湃的急湍，它一去无返，毫不流连。'
}
const App = {
  // 新的 setup 组件选项在创建组件之前执行(可以理解在beforeCreated前创建)
  setup(props, context) {
    // 在执行 setup 时，组件实例尚未被创建。在 setup 选项中 this 指向window了（不指向实例，可以说没有this），也就不能访问data状态、方法、计算属性
    console.log(props, context)
    const len = computed(() => sentenceArray.length)
    let sentenceTxt = ref(''); // {value: ''}
    sentenceTxt.value = innerText() // FIXME: 为了让sentenceTxt是响应式的，这种情况就得写两遍？
    function innerTextAdd() {
      sentenceTxt.value = innerText()
      setTimeout(() => {
        innerTextAdd()
      }, 1000 * 30)
    }
    // // onMounted(innerTextAdd)
    onMounted(()=>{
      // mounted钩子函数
      innerTextAdd()
    })

    return {
      len, 
      sentenceTxt
    }
  }
}
Vue.createApp(App).mount('#app')