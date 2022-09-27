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
<script>
export default {
    components: {
    },
    watch: {
        radio: function (newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },
    data() {
        return {
            username: '',
            password: '',
            radio: ''
        }
    },
    created() {
    },
    methods: {
        login() {
        }
    }
}


</script>
<style lang="scss" module>

</style>
