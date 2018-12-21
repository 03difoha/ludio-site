<template>
    <div class="videoWrapper">
            <iframe src="https://player.vimeo.com/video/302660626"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
</template>

<script>
   
</script>

<style scoped>

iframe{
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    border-radius: 0.3em;
}


.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}

</style>