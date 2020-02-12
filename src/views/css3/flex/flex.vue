<template>
    <div>
        <div v-if="!id" class="div1">
            <div>123</div>
            <div>234</div>
            <div class="div-son">345</div>
            <div>456</div>
            <div>567</div>
            <!--<div>123</div>-->
            <!--<div>234</div>-->
            <!--<div>345</div>-->
            <!--<div>456</div>-->
            <!--<div>567</div>-->
            <!--<div>123</div>-->
            <!--<div>234</div>-->
            <!--<div>345</div>-->
            <!--<div>456</div>-->
            <!--<div>567</div>-->
            <!--<div>123</div>-->
            <!--<div>234</div>-->
            <!--<div>345</div>-->
            <!--<div>456</div>-->
            <!--<div>567</div>-->
            <!--<div>123</div>-->
            <!--<div>234</div>-->
            <!--<div>345</div>-->
            <!--<div>456</div>-->
            <!--<div>567</div>-->
            <!--<div>123</div>-->
            <!--<div>234</div>-->
            <!--<div>345</div>-->
            <!--<div>456</div>-->
            <!--<div>567</div>-->
            <!--<div>567</div>-->
        </div>

        <!--骰子-->
        <div v-else-if="id == 1">
            <shaizi></shaizi>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">

    /**
     * flex的意思是弹性布局,用来为盒装模型提供最大的灵活性
     *  任何一个元素都可以使用flex布局
     */

    import shaizi from './shaizi';

    export default {
        components: {
            shaizi: shaizi
        },
        data() {
            return {
                id: undefined
            }
        },
        created() {
            let params = this.$route.query;
            if (params.id) {
                this.id = Number(params.id);
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="scss">

    .div1 {
        display: flex;
        /*flex-wrap: wrap-reverse;*/
        justify-content: space-around; /* 水平居中方式*/
        > div {
            width: 100px;
            height: 50px;
            background: greenyellow;
            flex-grow: 1; /* 权重*/
        }
        > .div-son {
            order: -1; /*顺序:默认0，越小越靠前*/
            flex-grow: 5;
            /*align-items: stretch;*/
            /*可以设置与其他项目不一样的对齐方式*/
        }
    }

</style>