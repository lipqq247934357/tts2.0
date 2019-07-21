<template>
    <div>
        <img src="./img/baofenbi.jpg" alt="">
        <img src="./img/1_1.jpg" alt="">
        <img src="./img/2_2.jpg" alt="">

        <img src="./img/baogao.jpg" alt="">
        <img src="./img/1_2.jpg" alt="">

        <img src="./img/2_1.jpg" alt="">

    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class cookBook extends Vue {
    }
</script>
<style lang="scss" module>

    img {
        width: 300px;
        height: 500px;
        margin-right: 100px;
        margin-bottom: 20px;
    }

</style>
