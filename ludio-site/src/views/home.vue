<template id="home">
    <div>
        <hero></hero>
        <jumbotron></jumbotron>
        <vid class="vid"></vid>
        <sub-modal></sub-modal>

    </div>
</template>

<script>
import hero from '@/components/hero'
import jumbotron from '@/components/jumbotron'
import vid from '@/components/vid'
import subModal from '@/components/subscribe-modal'



    export default{
        name: 'home',
        components: {
            'hero': hero,
            'jumbotron': jumbotron,
            'vid': vid,
            subModal: subModal
        }
    }

</script>

<style scoped>

.vid{
    min-height: 12em;
}

</style>