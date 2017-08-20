<template>
    <div class="demo">
      <v-button>我是按钮</v-button>
      <v-button>我是按钮11</v-button>
      <v-button>我是按钮22</v-button>
    </div>
</template>
<script>
import Service from './index';

import {Button} from '../../lib/fez/fezui';

let vButton = Button;

export default {

    name: 'demo',

    components: {
      vButton
    },

    data() {
        return {
            msg: '',
        }
    },

    created() {
        const _this = this;
        Service.get({}).then((res) => {
            _this.data = res;
            console.log(_this.data);
        })
    },

    mounted() {

    },

    methods: {

    }

}
</script>
<style>

</style>
