<template>
    <div class="home">
        <router-link to="/utils/weightEvargeCount">减重平均时间</router-link>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
    }
</script>
