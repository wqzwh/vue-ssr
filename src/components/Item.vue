<template>
  <div>{{info}}</div>
</template>
<script>
	export default {
		name:'item',
		data(){
			return {
				info:'我是另外一个页面'
			}
		},
		mounted(){
			console.log(this);
		}
	}
</script>