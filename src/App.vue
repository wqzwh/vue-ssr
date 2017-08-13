<template>
  <div id="app">
    <router-link to="/">上一页</router-link>
    <br>
    <router-link to="/item">下一页</router-link>
    <br>
    <router-link to="/demo">demo</router-link>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue';
import './lib/fez/styles/css/fezui.css';

	export default {
		name:'APP',
		data(){
			return {

			}
		}
	}
</script>
