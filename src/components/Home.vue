<template>
	<div>
		{{item.key}}
		{{num}}
		<button type="btn" @click="wq">点击</button>
	</div>
</template>
<script>
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
