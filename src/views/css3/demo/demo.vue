<template>
    <div>
        <div>
            <span id="spanTest">1111</span>
            <span>222</span>
        </div>
        <div style="font-size:10px;text-align: center">
            <input type="text">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    /**
     * flex的意思是弹性布局,用来为盒装模型提供最大的灵活性
     *  任何一个元素都可以使用flex布局
     */

    export default {
        data() {
            return {
                id: undefined
            }
        },
        created() {
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