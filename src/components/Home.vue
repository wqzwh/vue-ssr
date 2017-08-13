<template>
	<div>
		{{item.key}}
		{{num}}777
		<v-button @on-click="wq">点击</v-button>
	</div>
</template>
<script>
import {Button} from '../lib/fez/fezui';

let vButton = Button;
export default {
	name:'home',
	beforeCreate(){
		// console.log('beforeCreate',this)
	},
	created(){
		this.wq()
	},
  mounted(){
    // console.log('mounted',this)
  },
  components: {
      vButton
    },
	data () {
	    return {
	      num: 2
	    }
	  },
	asyncData ({ store, route }) {
	    // 触发 action 后，会返回 Promise
	    return store.dispatch('getSaleParams', {key:'你好好你好'})
	  },
	computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
    	// console.log(this);
      return this.$store.state.Home.items
    }
  },
  methods:{
    	wq(){
    		this.num++;
    	}
    }

}
</script>
