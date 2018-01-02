<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue';
	export default {
		name:'APP',
		data(){
			return {

			}
		}
	}
</script>
