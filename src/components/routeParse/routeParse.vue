<template>
    <div>
        <el-menu class="el-menu-demo" default-active="activeIndex" mode="horizontal"></el-menu>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import router from '@/router';

    @Component({
        props: {}
    })

    export default class routeParse extends Vue {

        data: object = {};

        // todo 创建结构，现在先不做了
        created() {
            //@ts-ignore
            // console.log(router.options.routes);
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
