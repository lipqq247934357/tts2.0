<template>
    <div>
        <!--一个点-->
        <div class="demo1 demo">
            <span class="item"></span>
        </div>

        <div class="demo2 demo">
            <span class="item"></span>
        </div>

        <div class="demo3 demo">
            <span class="item"></span>
        </div>

        <div class="demo4 demo">
            <span class="item"></span>
        </div>

        <div class="demo5 demo">
            <span class="item"></span>
        </div>

        <div class="demo6 demo">
            <span class="item"></span>
        </div>

        <div class="demo7 demo">
            <span class="item"></span>
        </div>

        <div class="demo8 demo">
            <span class="item"></span>
        </div>

        <div class="demo9 demo">
            <span class="item"></span>
        </div>


        <!--两个点-->
        <div class="demo11 demo">
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <div class="demo12 demo">
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <div class="demo13 demo">
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <div class="demo14 demo">
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <div class="demo15 demo">
            <span class="item"></span>
            <span class="item "></span>
        </div>

        <div class="demo16 demo">
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <!--3个项目-->
        <div class="demo21 demo">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>


        <!--4个项目-->
        <div class="demo31 demo">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>


        <div class="demo32 demo">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>

        <!--5个项目-->
        <div class="demo32 demo">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>


    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data() {
            return {}
        },
        created() {

        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="scss">

    .demo {
        display: flex;
        width: 50px;
        height: 50px;
        border: 1px solid #000;
    }

    span.item {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: #000;
    }

    .demo1 {
    }

    .demo2 {
        justify-content: center;
    }

    .demo3 {
        justify-content: flex-end;
    }

    .demo4 {
        align-items: center;
    }

    .demo5 {
        justify-content: center;
        align-items: center;
    }

    .demo6 {
        justify-content: flex-end;
        align-items: center;
    }

    .demo7 {
        justify-content: flex-start;
        align-items: flex-end;
    }

    .demo8 {
        justify-content: center;
        align-items: flex-end;
    }

    .demo9 {
        justify-content: flex-end;
        align-items: flex-end;
    }

    .demo11 {
        justify-content: space-between;
    }

    .demo12 {
        flex-direction: column;
        justify-content: space-between;
    }

    .demo13 {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .demo14 {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    .demo15 span:nth-child(2) {
        align-self: center;
    }

    .demo16 {
        justify-content: space-between;
    }

    .demo16 span:nth-child(2) {
        align-self: flex-end;
    }

    .demo21 {
        justify-content: space-between;
    }
    .demo21 span:nth-child(2) {
     align-self: center;
    }


    .demo21 span:nth-child(3) {
    align-self: flex-end;
    }
</style>