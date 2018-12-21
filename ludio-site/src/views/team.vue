<template id="team">
    <b-container id="card-container">
    <b-row>
        <b-col>
            <div>
    <b-card-group deck>
        <b-card img-src="static/img/harry.jpg"
                img-alt="Card image"
                img-top>
                <h3>Harry Difolco</h3>
            <p class="card-text">
                Web Developer
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        <b-card img-src="static/img/balazs.png"
                img-alt="Card image"
                img-top>
             <h3>Balazs Kovacs</h3>

            <p class="card-text">
                Product Designer
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-card-group>
</div>
        </b-col>
    </b-row>
    </b-container>
</template>

<script>
import jumbotron from '@/components/jumbotron'
import vid from '@/components/vid'


    export default{
        name: 'team',
        components: {
            'jumbotron': jumbotron,
            'vid': vid
        }
    }
</script>

<style scoped>
#card-container{
    margin-top: 3em
}
</style>