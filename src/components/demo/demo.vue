<template>
    <div class="demo">

    </div>
</template>
<script>
import Service from './index'

export default {

    name: 'demo',

    components: {

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
