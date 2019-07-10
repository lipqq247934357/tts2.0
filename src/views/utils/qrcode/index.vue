<template>
    <div>
        <input type="text" v-model="inputData">
        <canvas :class="$style['qrcode']" id="msg">
        </canvas>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import QRCode from 'qrcode';

    @Component({
        props: {
            historyData: Array
        },
        watch: {
            inputData(val) {
                let msg = document.getElementById('msg')
                if (msg) {
                    // 将获取到的数据（val）画到msg（canvas）上
                    QRCode.toCanvas(msg, val, function (error) {
                        if (error) console.error(error)
                        console.log('success!');
                    })

                }
            }
        }
    })
    export default class weightHistory extends Vue {
        inputData: string = 'http://baidu.com';
    }


</script>
<style lang="scss" module>
    .qrcode {
        width: 200px;
        height: 200px;
    }
</style>
