<template>
    <div>
        <div v-if="type === ''">

        </div>
        <div v-else-if="type === 'juzhong'">
            <juzhong></juzhong>
        </div>
        <div v-else-if="type === 'mask'">
            <maskDemo></maskDemo>
        </div>
        <div v-else-if="type === 'weiyuansu'">
            <weiyuansu></weiyuansu>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    import juzhong from '../juzhong/juzhong.vue'; // 居中
    import maskDemo from '../mask/mask.vue'; // 蒙层
    import weiyuansu from '../weiyuansu/weiyuansu.vue' // 伪元素

    export default {
        components: {
            juzhong,
            maskDemo,
            weiyuansu
        },
        data() {
            return {
                id: undefined,
                type: undefined
            }
        },
        created() {
            this.type = this.$route.query.type || '';
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="scss">
    #spanTest {
        margin: 10px;
        padding: 10px;
    }
</style>