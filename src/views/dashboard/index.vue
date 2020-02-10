<template>
    <div class="cotent-margin-adsdfgh">
        <div>
            <label>
                username:
                <el-input style="width: 200px;" v-model="username"></el-input>
            </label>
        </div>
        <br>
        <div>
            <label>
                password:
                <el-input style="width: 200px" type="password" v-model="password"></el-input>
            </label>
        </div>
        <br>
        <div>
            可选功能：
            <el-radio label="1" v-model="radio">微信倒计时</el-radio>
            <el-radio label="2" v-model="radio">修改密码</el-radio>
        </div>
        <br>
        <div>
            <el-button @click="login">登录</el-button>
        </div>
    </div>
</template>
<script lang="ts">


    import {Component, Vue} from 'vue-property-decorator';


    @Component({
        components: {},
        watch: {
            radio: function (newVal: string, oldVal: string) {
                console.log(newVal, oldVal);
            }
        }
    })
    export default class login extends Vue {

        username: string = '';
        password: string = '';
        radio: string = '';

        login() {
        }
    }


</script>
<style lang="scss" module>

</style>
