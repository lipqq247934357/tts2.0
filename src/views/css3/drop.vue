<template>
    <div>
        <p>拖动 RUNOOB.COM 图片到矩形框中:</p>
        <div id="div1"  @drop="drop" @dragover="allowDrop"></div>
        <br>
        <img id="drag1" src="https://www.runoob.com/images/logo.png" draggable="true" @dragstart="drag"
             width="336" height="69">
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data() {
            return {}
        },
        created() {
        },
        methods: {
            allowDrop: function (ev) {
                ev.preventDefault();
            },
            drag: function (ev) {
                ev.dataTransfer.setData("Text", ev.target.id);
            },
            drop: function (ev) {
                ev.preventDefault();
                let data = ev.dataTransfer.getData("Text");
                ev.target.appendChild(document.getElementById(data));
            }
        }
    }
</script>
<style lang="scss">
    #div1 {
        width: 350px;
        height: 70px;
        padding: 10px;
        border: 1px solid #aaaaaa;
    }
</style>
