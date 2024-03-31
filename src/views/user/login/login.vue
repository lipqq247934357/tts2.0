<template>
    <div class="cotent-margin-adsdfgh">
        <div>
            <label>
                username:
                <a-input style="width: 200px;" v-model="username"></a-input>
            </label>
        </div>
        <br>
        <div>
            <label>
                password:
                <a-input style="width: 200px" type="password" v-model="password"></a-input>
            </label>
        </div>
        <br>
        <div>
            可选功能：
            <a-radio label="1" v-model="radio">微信倒计时</a-radio>
            <a-radio label="2" v-model="radio">修改密码</a-radio>
        </div>
        <br>
        <div>
            <a-button @click="login">登录</a-button>
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
