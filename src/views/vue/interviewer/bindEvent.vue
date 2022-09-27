<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

</style>

<template>
    <div>
        <ul @click="bindEvent">
            <li>11111
                <div>aaa</div>
            </li>
            <li>22222
                <div>bbb</div>
            </li>
            <li>33333
                <div>ccc</div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data() {
            return {show: true};
        },
        methods: {
            bindEvent(event) {
                console.log(event.target);
            }
        },
        components: {}
    }
</script>

